const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const { id } = request.body;

        const subs = await connection('subs')
            .where('id', id)
            .select('name')
            .first();

        if (!subs) {
            return response.status(400).json({ error: 'No SUB found with this ID' });
        }
        return response.json(subs);
    }
}