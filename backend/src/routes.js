const express = require('express');

const OngController = require('./controller/OngController');
const IncidentController = require('./controller/IncidentController');
const ProfileController = require('./controller/ProfileController');
const SessionController = require('./controller/SessionController');

const routes = express.Router();

routes.post('/session', SessionController.create);

routes.get('/ongs', OngController.findAll);
routes.post('/ongs',  OngController.create);

routes.get('/profile', ProfileController.index);

routes.post('/incidents',  IncidentController.create);
routes.get('/incidents', IncidentController.findAll);
routes.delete('/incidents/:id', IncidentController.delete);



module.exports = routes;