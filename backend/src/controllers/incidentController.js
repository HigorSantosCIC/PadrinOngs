const connection = require('../database/connection');
module.exports = {
    async index(request, response) {
        const { page = 1 } = request.query;

        const [count] = await connection('incidents').count();
        console.log(count);


        const incidents = await connection('incidents')
            .join('subs', 'subs.id', '=', 'incidents.subs_id')
            .limit(5)
            .offset((page - 1) * 5)
            .select([
                'incidents.*',
                'subs.name',
                'subs.email',
                'subs.whatsapp',
                'subs.city',
                'subs.uf'
            ]);

        response.header('X-Total-Count', count['count(*)']);

        return response.json(incidents);
    },

    async create(request, response) {
        const { title, description, value } = request.body;
        const subs_id = request.headers.authorization;

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            subs_id,
        });

        return response.json({ id });
    },
    async delete(request, response) {
        const { id } = request.params;
        const subs_id = request.headers.authorization;

        const incident = await connection('incidents')
            .where('id', id)
            .select('subs_id')
            .first();

        if (incident.subs_id != subs_id) {
            return response.status(401).json({ error: 'Operation not permitted.' });
        }

        await connection('incidents').where('id', id).delete();

        return response.status(204).send();
    }
};