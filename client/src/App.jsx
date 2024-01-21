import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import TodoTable from './components/TodoTable';

import { useState, useEffect } from 'react';
import todoService from './services/todo.service';

function App() {
  const [todos, setTodos] = useState(undefined);

  useEffect(() => {
    const fetchTodos = async () => {
      const fetchedTodos = await todoService.getTodos();
      setTodos(fetchedTodos);
    };
    fetchTodos();
  }, []);

  return (
    <>
      <div className="flex flex-col h-screen">
        <Navbar />
        <main className="mx-8 my-8 lg:mx-24">
          <Dashboard todos={todos} />
          <TodoTable todos={todos} />
        </main>
        <footer className="mt-auto">Insert footer here</footer>
      </div>
    </>
  );
}

export default App;
