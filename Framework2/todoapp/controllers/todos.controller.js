var TodoService = require('../services/todo.service');

_this = this;

// Async Controller function to get the todo list
exports.getTodos = async function (req, res, next) {
    // check the existence of the query parameters, if the exists doesn't exists assign a default a value
    var page = req.query.page ? req.query.page : 1;
    var limit = req.query.limit ? req.query.limit : 10
    try {
        var todos = await TodoService.getTodos({}, page, limit);
        // return the todos list with the appropriate HTTP status code and message
        return res.status(200).json({
            status: 200,
            data: todos,
            message: "Success Todos Recieved"
        });
    } catch (e) {
        return res.status(400).json({
            status: 400,
            message: e.message
        });
    }
}

exports.createTodo = async function (req, res, next) {
    // req.body contains the form submit values
    var todo = {
        title: req.body.title,
        description: req.body.description,
        status: req.body.status
    }

    try {
        // calling the service function with the new object from the request body
        var createdTodo = await TodoService.createTodo(todo);
        return res.status(201).json({
            status: 201,
            data: createdTodo,
            message: 'Success created todo'
        });
    } catch (e) {
        return res.status(400).json({
            status: 400,
            message: "Todo Creation was Unsuccesfull"
        })
    }
}

exports.updateTodo = async function (req, res, next) {
    // Id is necessary for the update
    if (!req.body._id) {
        return res.status(400).json({
            status: 400.,
            message: "Id must be present"
        })
    }

    var id = req.body._id;

    console.log(req.body);

    var todo = {
        id,
        title: req.body.title ? req.body.title : null,
        desciption: req.body.desciption ? req.body.desciption : null,
        status: req.body.status ? req.body.status : null
    }
    try {
        var updateTodo = await TodoService.updateTodo(todo);
        return res.status(200).json({
            status: 200,
            data: updateTodo,
            message: "Succesfully Updated Tod"
        })
    } catch (e) {
        return res.status(400).json({
            status: 400.,
            message: e.message
        })
    }
}

exports.removeTodo = async function (req, res, next) {
    var id = req.params.id;

    try {
        var deleted = await TodoService.deleteTodo(id);
        return res.status(204).json({
            status: 204,
            message: "Succesfully Todo Deleted"
        })
    } catch (e) {
        return res.status(400).json({
            status: 400,
            message: e.message
        })
    }
}