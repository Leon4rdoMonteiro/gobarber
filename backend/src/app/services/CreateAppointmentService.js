import { startOfHour, parseISO, isBefore, format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import User from '../models/User';
import Appointment from '../models/Appointment';

import Notification from '../schemas/Notification';

import Cache from '../../lib/Cache';

class CreateAppointmentService {
    async run({ provider_id, user_id, date }) {

        /**
         * Check if provider_id is really a provider
         */

        const isProvider = await User.findOne({
            where: { id: provider_id, provider: true }
      });

      if(!isProvider){
          throw new Error('You can only create appointments with providers');
      }

      if(user_id === provider_id){
        throw new Error('You cannot create appointments for yourself');
      }

      const hourStart = startOfHour(parseISO(date));

      /**
       * Check for past dates
       */
      if(isBefore(hourStart, new Date())){
        throw new Error('Past dates are not permitted');
      }

      /**
       * Check date avaliability
       */

      const checkAvaliability = await Appointment.findOne({
          where: {
              provider_id,
              canceled_at: null,
              date: hourStart
          }
      });

      if(checkAvaliability){
        throw new Error('Appointment date is not avaliable');
      }

      const appointment = await Appointment.create({
          user_id,
          provider_id,
          date: hourStart,
      })

      /**
       * Notify appointment provider
       */

       const { name }= await User.findByPk(user_id);

       const formattedDate = format(
           hourStart,
           "'dia' dd 'de' MMMM', às' H:mm'h'",
           { locale: pt }
           )

      await Notification.create({
          content: `Novo agendamento de ${name} para o ${formattedDate}`,
          user: provider_id,
      });

      /**
         *  Invalidate cache
         */

        await Cache.invalidatePrefix(`user:${user_id}:appointments`);

      return appointment;
    }
}

export default new CreateAppointmentService();
