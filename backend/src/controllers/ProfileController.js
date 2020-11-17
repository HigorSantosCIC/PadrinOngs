const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const subs_id = request.headers.authorization;

        const incidents = await connection('incidents')
            .where('subs_id', subs_id)
            .select('*');

        return response.json(incidents);
    }
}