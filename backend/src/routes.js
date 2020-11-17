const express = require('express');
const SubController = require('./controllers/SubsController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/subs', SubController.index);
routes.post('/subs', SubController.create);


routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;
















/**
 * Rota / Recurso
 */


/**
 *
 * Metodos HTTP
 *
 * GET: BUSCAR UMA INFORMACAO DO BACK-END
 * POST: CRIAR UMA INFORMACAO NO BACK-END
 * PUT: ALTERAR UMA INFORMACAO NO BACK-END
 * DELETE: DELETAR UMA INFORMACAO NO BACK-END
 */

/**
 * Tipos de parametros:
 *
 * Route Params: Parametrs utilizados para idenficar recursos
 * Query Params: Parametros nomeados enviados na rota apos '?' (FILTROS PAGINACAO)
 * Request Body: Corpo da requisicao, utilizada para criar ou alterar recursos
 */

/**
 * SQL: MYSQL, SQLITE, POSTGREESQL, OTACLE, MICROSOFT SQL SERVER
 * NOSQL: MongoDB, CouchDB, etc
 */


/**
 * Driver: SELECT * FROM users
 * Query Builder: table('user').select('*').where()
 */
