const express = require('express');
const router = express.Router();
const db = require("../models");

// Show all todos 
router.get('/', function(req, res){
    db.Todo.find()
    .then(function(todos){
        res.json(todos);
    })
    .catch(function(err){
        res.send(err);
    })
});

// Create new todo
router.post('/', function(req, res){
    db.Todo.create(req.body)
    .then(function(newTodo){
        res.status(201).json(newTodo);
    })
    .catch(function(err){
        res.send(err);
    })
});

// Show todo based on the todo's ID
router.get('/:todoId', function(req, res){
    db.Todo.findById(req.params.todoId)
    .then(function(foundTodo){
        res.json(foundTodo);
    })
    .catch(function(err){
        res.send(err);
    })
});

// Update a todo
router.put('/:todoId', function(req, res){
    db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new: true})
    .then(function(todo){
        res.json(todo);
    })
    .catch(function(err){
        res.send(err);
    })
});

// Delete a todo
router.delete('/:todoId', function(req, res){
    db.Todo.remove({_id: req.params.todoId})
    .then(function(){
        res.json({message: 'We deleted it!'})
    })
    .catch(function(err){
        res.send(err);
    })
});

module.exports = router;