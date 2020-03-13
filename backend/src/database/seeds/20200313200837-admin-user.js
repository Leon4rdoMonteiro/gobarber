const bcrypt = require('bcryptjs');

module.exports = {
    up: QueryInterface => {
        return QueryInterface.bulkInsert('users', [
            {
                name: 'Go Barber',
                email: 'email@gobarber.com',
                password: bcrypt.hashSync('123456', 8),
                provider: true,
                created_at: new Date(),
                updated_at: new Date(),
            },
        ]);
    },

    down: QueryInterface => {
        return QueryInterface.bulkDelete('users', null, {});
    },
};
