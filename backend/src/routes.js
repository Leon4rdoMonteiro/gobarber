import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async(req, res) => {
    const user = await User.create({
        name: 'Leonardo Monteiro',
        email: 'leonardomonteiro.sh@gmail.com',
        password_hash: '1232gfd134134'
    });
    return res.json(user);
});

export default routes;
