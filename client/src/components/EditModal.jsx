import { useState } from 'react';
import todoService from '../services/todo.service';
import propTypes from 'prop-types';

function EditModal({ id, title, dueDateISO, isCompleted }) {
  const [newTitle, setNewTitle] = useState(title);
  const [dueDate, setDueDate] = useState(
    dueDateISO ? new Date(dueDateISO).toISOString().slice(0, 16) : ''
  );
  const [newIsCompleted, setNewIsCompleted] = useState(
    isCompleted ? 'Complete' : 'Pending'
  );
  const [error, setError] = useState('');

  const handleClose = () => {
    document.getElementById(`edit-modal-${id}`).close();
  };

  const handleDelete = () => {
    const deleteTodo = async () => {
      try {
        await todoService.deleteTodo(id);
        window.location.reload();
      } catch (e) {
        console.error(e);
        setError('Something went wrong! Check the logs.');
      }
    };
    deleteTodo();
  };

  const handleSubmit = () => {
    // input validation
    if (newTitle === '' || dueDate === '') {
      setError('Error: newTitle or Due Date fields must not be empty!');
      return;
    }

    const updateTodo = async () => {
      try {
        await todoService.updateTodo({
          id,
          title: newTitle,
          dueDate,
          isCompleted: newIsCompleted === 'Complete',
        });
        setNewTitle('');
        setDueDate('');
        setError('');
        handleClose();
        window.location.reload();
      } catch (e) {
        console.error(e);
        setError('Something went wrong! Check the logs.');
      }
    };
    updateTodo();
  };

  const handleChange = (e, setFn) => {
    console.log({
      id,
      title: newTitle,
      dueDate,
      isCompleted: newIsCompleted === 'Complete',
    });
    setFn(e.target.value);
  };

  return (
    <>
      <button
        className="btn btn-circle glass"
        onClick={() => document.getElementById(`edit-modal-${id}`).showModal()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
          />
        </svg>
      </button>
      <dialog id={`edit-modal-${id}`} className="modal">
        <div className="w-11/12 max-w-5xl modal-box">
          <div className="flex items-center justify-between">
            {' '}
            <h3 className="text-xl">Edit Todo</h3>
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
              value={newTitle}
              onChange={(e) => {
                handleChange(e, setNewTitle);
              }}
              type="text"
              placeholder="Something to do"
              className="w-full input input-bordered"
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
                  className="w-full input input-bordered"
                />
              </div>

              <div className="w-1/5">
                <label className="label">
                  <span className="font-semibold label-text">Status</span>
                </label>
                <select
                  className="w-full select select-bordered join-item"
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
              {/* if there is a button, it will close the modal */}
              <button
                className="p-3 btn btn-square btn-outline btn-error"
                onClick={() => {
                  handleDelete();
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ionicon"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M112 112l20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="32"
                  />
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="32"
                    d="M80 112h352"
                  />
                  <path
                    d="M192 112V72h0a23.93 23.93 0 0124-24h80a23.93 23.93 0 0124 24h0v40M256 176v224M184 176l8 224M328 176l-8 224"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="32"
                  />
                </svg>
              </button>
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

EditModal.propTypes = {
  id: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  dueDateISO: propTypes.string,
  isCompleted: propTypes.bool.isRequired,
};

export default EditModal;
