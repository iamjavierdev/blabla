const router = require("express").Router();
const User = require("../models/User.model")


//Lista de usuarios

router.get('/users', /* meter middleware */(req, res, next) => {

    // const roles = rolesChecker(req.session.currentUser) esto para el rol

    User
        .find()
        .then(users => res.render('users/list-users', { users }))
        .catch(err => console.log(err))
})


module.exports = router