const router = require('express').Router();
let User = require('../model/User')

router.route('/getusers').get((req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res,next) => {
    // const username = req.body.username;

    // const newUser = new User({username});

    // newUser.save()
    //     .then(() => res.json('User added!'))
    //     .catch(err => res.status(400).json('Error: ' + err))

    User.create(req.body).then(function(user){
        res.send(user);
    }).catch(next);
});


module.exports = router;