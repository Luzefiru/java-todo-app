import { useState } from 'react';
import todoService from '../services/todo.service';

function AddModal() {
  const [title, setTitle] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [newIsCompleted, setNewIsCompleted] = useState('Pending');
  const [error, setError] = useState('');

  const handleClose = () => {
    document.getElementById('add-modal').close();
  };

  const handleSubmit = () => {
    // input validation
    if (title === '') {
      setError('Error: Title field must not be empty!');
      return;
    }

    const createTodo = async () => {
      try {
        await todoService.createTodo({
          title: title,
          dueDate,
          isCompleted: newIsCompleted === 'Complete',
        });
        setTitle('');
        setDueDate('');
        setError('');
        handleClose();
        window.location.reload();
      } catch (e) {
        console.error(e);
        setError('Something went wrong! Check the logs.');
      }
    };
    createTodo();
  };

  const handleChange = (e, setFn) => {
    setFn(e.target.value);
  };

  return (
    <>
      <button
        className="font-bold btn btn-secondary"
        onClick={() => document.getElementById('add-modal').showModal()}
      >
        Add Todo
      </button>
      <dialog id={'add-modal'} className="modal">
        <div className="w-11/12 max-w-5xl modal-box">
          <div className="flex items-center justify-between">
            {' '}
            <h3 className="text-xl">Add Todo</h3>
            <button
              className="bg-white border-white shadow-none btn btn-sm btn-square no-animation"
              onClick={() => handleClose()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ionicon"
                viewBox="0 0 512 512"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="32"
                  d="M368 368L144 144M368 144L144 368"
                />
              </svg>
            </button>
          </div>

          <div className="w-full py-4">
            <label className="label">
              <span className="font-semibold label-text">Title</span>
            </label>
            <input
              value={title}
              onChange={(e) => {
                handleChange(e, setTitle);
              }}
              type="text"
              placeholder="Something to do"
              className="w-full font-semibold input input-bordered"
            />
            <div className="flex justify-between gap-4 mt-2">
              <div className="w-full">
                <label className="label">
                  <span className="font-semibold label-text">Due Date</span>
                </label>
                <input
                  value={dueDate}
                  onChange={(e) => {
                    handleChange(e, setDueDate);
                  }}
                  type="datetime-local"
                  className="w-full font-semibold input input-bordered"
                />
              </div>

              <div className="w-1/5">
                <label className="label">
                  <span className="font-semibold label-text">Status</span>
                </label>
                <select
                  className="w-full font-semibold select select-bordered join-item"
                  value={newIsCompleted}
                  onChange={(e) => {
                    handleChange(e, setNewIsCompleted);
                  }}
                >
                  <option>Complete</option>
                  <option>Pending</option>
                </select>
              </div>
            </div>
          </div>
          {error !== '' && <p className="font-semibold text-error">{error}</p>}
          <div className="modal-action">
            <div className="flex gap-4" method="dialog">
              <button
                className="p-3 btn btn-square btn-outline btn-success"
                onClick={() => {
                  handleSubmit();
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ionicon"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="32"
                    d="M416 128L192 384l-96-96"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default AddModal;
