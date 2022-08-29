const express = require('express');
const { fetchSingleTodo, fetchAllTodos, postTodo, deleteTodo, searchTodos, updateTodo } = require('../handlers/TodoData');

const todosRouter = express.Router();

todosRouter.get(`/todos/all`, fetchAllTodos);
todosRouter.get(`/todo/:id`, fetchSingleTodo);
todosRouter.get(`/todos/search`, searchTodos);
todosRouter.post(`/todo/create`,postTodo);
todosRouter.delete(`/todo/:id`,deleteTodo);
todosRouter.put(`/todo/:id`,updateTodo)



module.exports = todosRouter;