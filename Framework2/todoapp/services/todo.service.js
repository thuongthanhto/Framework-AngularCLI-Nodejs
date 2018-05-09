var ToDo = require('../models/todo.model');

_this = this;

exports.getTodos = async function (query, page, limit) {
    var options = {
        page,
        limit
    }

    try {
        var todos = await ToDo.paginate(query, options);
        // return the todo list that was returned by mongoose promise
        return todos;
    } catch (e) {
        // return a Error message describing the reason
        throw Error('Error while Paginating Todos');
    }
}

exports.createTodo = async function (todo) { 
    // Creatign a new Mongoose Object by using the new keyword
    var newTodo = new ToDo({
        title: todo.title, 
        description: todo.description,
        date: new Date(),
        status: todo.status
    });

    try{
        // Saving the Todo
        var savedTodo = await newTodo.save();
        return savedTodo;
    }catch(e){
        // return a Error message describing the reason
        throw Error("Error while Creating Todo")
    }
 }

exports.updateTodo = async function (todo) {
    var id = todo.id;

    try{
        // Find the old Todo Object by the Id
        var oldTodo = await ToDo.findById(id);
    }catch(e){
        throw Error("Error occured while finding the todo");
    }

    // If no old Todo Object exists return false
    if (!oldTodo){
        return false;
    }

    console.log(oldTodo);
    
    // Edit the todo object
    oldTodo.title = todo.title,
    oldTodo.description = todo.description,
    oldTodo.status = todo.status

    console.log(oldTodo);

    try{
        var savedTodo = await oldTodo.save();
        return savedTodo;
    }catch(e){
        throw Error('And Error occered while updating the Todo');
    }
  }

exports.deleteTodo = async function (id) {
    // Delete the todo
    try{
        var deleted = await ToDo.remove({_id: id});
        console.log(deleted)
        if (deleted.n === 0){
            throw Error("Todo could not be deleted");
        }
        return deleted;
    }catch(e){
        throw Error('Error occured while deleting the todo'+ e);
    }
  }