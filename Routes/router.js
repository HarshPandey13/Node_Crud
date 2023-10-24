const express = require('express');
const router = new express.Router();
const controllers = require('../Controllers/userControllers')


//routers

router.post('/user/register',controllers.userpost)
router.get('/user/getAlluser',controllers.getUsers)
router.get('/user/Singleuser/:name',controllers.getSingleuser)
router.delete('/user/deleteuser/:name',controllers.deleteUser)
router.put('/user/updateuser/:id',controllers.updateUser);


module.exports = router;