import axios from 'axios';
const baseUrl = 'http://localhost:3000/todos';

const todoService = (() => {
  const getTodos = async () => {
    const { data } = await axios.get(baseUrl);
    return data;
  };

  const createTodo = async ({ title, dueDate, isCompleted }) => {
    const { data } = await axios.post(baseUrl, {
      title,
      due_date: new Date(dueDate).toISOString(),
      is_completed: isCompleted,
    });
    return data;
  };

  const updateTodo = async ({ id, title, dueDate, isCompleted }) => {
    console.log(dueDate);

    const { data } = await axios.put(`${baseUrl}/${id}`, {
      id,
      title,
      due_date: new Date(dueDate).toISOString(),
      is_completed: isCompleted,
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
