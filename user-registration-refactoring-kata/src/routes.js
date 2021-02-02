const { Router } = require('express');
const controllers = require('./controllers');

const router = Router();

router.post("/users", controllers.registerUser);

module.exports = router;
