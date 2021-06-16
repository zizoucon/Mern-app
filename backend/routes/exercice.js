const router = require('express').Router();
let Exercise = require('../model/Exercice');


router.get('/getexercices',function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    Exercise.find({}).then(function(exercices){
        res.send(exercices);
    }).catch(next);
});
router.route('/addexo').post((req,res,next) => {

Exercise.create(req.body).then(function(exo){
    res.send(exo);
}).catch(next);
});

router.route('/:id').get((req, res) => {
Exercise.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json('Exercise deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
Exercise.findById(req.params.id)
    .then(exercise => {
    exercise.username = req.body.username;
    exercise.description = req.body.description;
    exercise.duration = Number(req.body.duration);
    exercise.date = Date.parse(req.body.date);

    exercise.save()
        .then(() => res.json('Exercise updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;