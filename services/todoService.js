import service from './config';

export const getTodos = () => service.get('/todos');
export const getTodoById = (id) => service.get(`/todos/${id}`);
export const postTodo = (data) => service.post('/todos', data);
