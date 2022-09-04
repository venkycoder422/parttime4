const express = require('express');
const { fetchAllPins, fetchSinglePin, searchPins, postPin } = require('../handlers/pin');


const pinsRouter = express.Router();

pinsRouter.get('/pin', fetchAllPins);
pinsRouter.get(`/pin/:id`, fetchSinglePin);
pinsRouter.get(`/pins`, searchPins);
pinsRouter.post(`/pin/create`,postPin);




module.exports = pinsRouter;