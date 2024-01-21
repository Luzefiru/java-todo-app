import propTypes from 'prop-types';
import TodoEntry from './TodoEntry';
import { useState } from 'react';

function TodoTable({ todos }) {
  const [isShowingCompleted, setIsShowingCompleted] = useState(true);
  const filteredTodos = isShowingCompleted
    ? todos
    : todos.filter((t) => !t.is_completed);

  if (filteredTodos === undefined) {
    return (
      <div className="flex items-center justify-center w-full mt-16">
        <span className="loading loading-ring loading-lg" />
      </div>
    );
  }

  return (
    <div className="overflow-x-auto border-[1px] rounded-lg shadow grid">
      <div className="flex pt-4 pr-4 ml-auto form-control w-fit">
        <label className="cursor-pointer label">
          <span className="mr-2 font-semibold label-text opacity-70">
            Show completed tasks
          </span>
          <input
            type="checkbox"
            checked={isShowingCompleted}
            className="checkbox checkbox-secondary"
            onChange={() => {
              setIsShowingCompleted((oldValue) => !oldValue);
            }}
          />
        </label>
      </div>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Title</th>
            <th>Due Date</th>
            <th>Tags</th>
            <th></th>
          </tr>
        </thead>
        {/* body */}
        <tbody>
          {filteredTodos?.map((t) => (
            <TodoEntry
              id={Number(t.id)}
              title={t.title}
              dueDateISO={t.due_date}
              isCompleted={t.is_completed}
              key={t.id}
            />
          ))}
        </tbody>
        {/* foot */}
      </table>
    </div>
  );
}

TodoTable.propTypes = {
  todos: propTypes.arrayOf(propTypes.object).isRequired,
};

export default TodoTable;
