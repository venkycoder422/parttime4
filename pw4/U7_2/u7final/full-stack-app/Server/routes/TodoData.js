const express = require('express');
const { fetchSingleTodo, fetchAllTodos, postTodo, deleteTodo, searchTodos } = require('../handlers/TodoData');

const todosRouter = express.Router();

todosRouter.get(`/todos/all`, fetchAllTodos);
todosRouter.get(`/todo/:id`, fetchSingleTodo);
todosRouter.get(`/todo/search`, searchTodos);
todosRouter.post(`/todo/create`,postTodo);
todosRouter.delete(`/todo/:id`,deleteTodo);



module.exports = todosRouter;