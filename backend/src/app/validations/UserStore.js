import * as Yup from 'yup';

export default async (req, res, next) => {
    try {
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            email: Yup.string().email().required(),
            password: Yup.string().required().min(6),
        });

        await schema.validate(req.body, { abortEarly: true });

        return next();
    } catch(err) {
        return res.status(401).json({ error: 'Validation fails', messages: err.inner });
    }
};
