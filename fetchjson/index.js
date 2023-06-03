"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1.default.get(url).then(function (response) {
    // const todo: ITodo = response.data;
    var todo = response.data;
    var id = todo.id, title = todo.title, completed = todo.completed;
    console.log("\n\t\tThe Todo with id: ".concat(id, "\n\t\tHas a title of: ").concat(title, "\n\t\tIs it finished: ").concat(completed, "\n\t"));
});
