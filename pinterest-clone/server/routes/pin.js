const express = require('express');
const { fetchAllPins, fetchSinglePin, searchPins, postPin } = require('../handlers/pin');


const pinsRouter = express.Router();

pinsRouter.get('/pins', fetchAllPins);
pinsRouter.get(`/pins/:id`, fetchSinglePin);
pinsRouter.get(`/pins/search`, searchPins);
pinsRouter.post(`/pins/create`,postPin);




module.exports = pinsRouter;