import axios from 'axios';
const baseUrl = 'http://localhost:3000/todos';

const todoService = (() => {
  const getTodos = async () => {
    const { data } = await axios.get(baseUrl);
    return data;
  };

  const createTodo = async ({ title, dueDateISO, isCompleted }) => {
    const { data } = await axios.post(baseUrl, {
      title,
      dueDateISO,
      isCompleted,
    });
    return data;
  };

  const updateTodo = async ({ id, title, dueDateISO, isCompleted }) => {
    const { data } = await axios.put(`${baseUrl}/${id}`, {
      id,
      title,
      dueDateISO,
      isCompleted,
    });
    return data;
  };

  const deleteTodo = async (id) => {
    await axios.delete(`${baseUrl}/${id}`);
    return;
  };

  return { getTodos, createTodo, updateTodo, deleteTodo };
})();

export default todoService;
