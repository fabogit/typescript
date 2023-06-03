"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1.default.get(url).then(function (response) {
    // const todo: ITodo = response.data;
    var todo = response.data;
    var id = todo.id, title = todo.title, completed = todo.completed;
    logTodo(id, title, completed);
});
var logTodo = function (id, title, completed) {
    console.log("\n\tThe Todo with id: ".concat(id, "\n\tHas a title of: ").concat(title, "\n\tIs it finished: ").concat(completed, "\n"));
};
