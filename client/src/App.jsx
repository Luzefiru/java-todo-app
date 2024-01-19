import Navbar from './components/Navbar';
import TodoTable from './components/TodoTable';

function App() {
  return (
    <>
      <div className="flex flex-col h-screen">
        <Navbar />
        <main className="mx-24 my-8">
          <TodoTable />
        </main>
        <footer className="mt-auto">Insert footer here</footer>
      </div>
    </>
  );
}

export default App;
