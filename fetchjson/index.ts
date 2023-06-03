import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface ITodo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((response) => {
  // const todo: ITodo = response.data;
  const todo = response.data as ITodo;

  const { id, title, completed } = todo;

  logTodo(id, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
	The Todo with id: ${id}
	Has a title of: ${title}
	Is it finished: ${completed}
`);
};
