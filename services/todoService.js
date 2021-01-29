import service from './config';

export const getTodos = () => service.get('/todos');
export const getTodoById = (id) => service.get(`/todos/${id}`);
export const postTodo = (data) => service.post('/todos', data);
export const updateTodo = (id, data) => service.put(`/todos/${id}`, data);
export const deleteTodo = (id) => service.delete(`/todos/${id}`);
export const toggleTodo = (id, isChecked) =>
  service.patch(`/todos/${id}`, {completed: isChecked});
