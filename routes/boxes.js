var express = require('express');
var router = express.Router();


// Load User model
const Box = require("../models/Box")
const update = require('../config/config')

// @route  GET /boxes/index
// @desc   Test boxes index
// @access Public
router.get('/index', (req, res) => res.status(200).json({msg: 'Awesome!'}))

// @route GET /boxes/all
// @desc Get all box
// @access Publice
router.get( "/all",(req, res) => {
      Box.find({})
        .then(boxes => res.json(boxes))
        .catch(new Error('Box is not working correctly'));
    }
  );

// @route   POST /boxes/add
// @desc    Add box
// @access  Public
router.post('/add', (req, res) => {
    const newBox = new box({
        name:   req.body.name,
        color:  req.body.color,
        size:   req.body.size
    })

    newBox.save((err, box) =>{
        if(err){
            console.log(err)
        }
        else{
            res.send(box)
        }
    })
 

})

// @route   GET /boxes/:id
// @desc    Show box by id
// @access  Public
router.get('/:id', (req, res) => {
    Box.findById(req.params.id, req.body, (err, box) => {
        if(err){
            console.lot(err)
        }
        else{
            res.json(box)
        }
    })
})


// @route   PUT /boxes/:id
// @desc    Update box by id
// @access  Public
router.put('/:id', (req, res) => {
    Box.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, box) => {
        if(err){
            console.log(err)
        }
        else{
            res.json(box)
        }
    })
})

// @route   DELETE /boxes/:id
// @desc    Delete box by id
// @access  Public
router.delete('/:id', (req, res) => {
    Box.findByIdAndRemove(req.param.id, (err, box) => {
        if(err){
            console.log(err)
        }
        else{
            res.send('Box was deleted')
        }
    })
})

// DELETES A USER FROM THE DATABASE
// router.delete('/:id', function (req, res) {
//     User.findByIdAndRemove(req.params.id, function (err, user) {
//         if (err) return res.status(500).send("There was a problem deleting the user.");
//         res.status(200).send("User "+ user.name +" was deleted.");
//     });
// });
  
module.exports = router
