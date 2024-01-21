import axios from 'axios';
const baseUrl = 'http://localhost:3000/api/todos';

/**
 * Formats the ISO date string to be compatible with the Java backend.
 *
 * @param {string} dateString
 * @returns
 */
function formatDate(dateString) {
  const dateObject = new Date(dateString);

  const year = dateObject.getFullYear();
  const month = (dateObject.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-indexed
  const day = dateObject.getDate().toString().padStart(2, '0');
  const hours = dateObject.getHours().toString().padStart(2, '0');
  const minutes = dateObject.getMinutes().toString().padStart(2, '0');

  const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}`;
  return formattedDate;
}

const todoService = (() => {
  const getTodos = async () => {
    const { data } = await axios.get(baseUrl);
    const formattedData = data
      .map((t) => {
        return {
          id: t.taskID,
          title: t.title,
          due_date: t.due_date,
          is_completed: t.is_completed,
        };
      })
      .sort((a, b) => {
        return new Date(a.due_date) > new Date(b.due_date) ? 1 : -1;
      });
    return formattedData;
  };

  const createTodo = async ({ title, dueDate, isCompleted }) => {
    const { data } = await axios.post(baseUrl, {
      title,
      due_date: formatDate(new Date(dueDate)),
      is_completed: isCompleted,
    });
    return data;
  };

  const updateTodo = async ({ id, title, dueDate, isCompleted }) => {
    const { data } = await axios.put(`${baseUrl}/${id}`, {
      id: Number(id),
      title,
      due_date: formatDate(new Date(dueDate)),
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
