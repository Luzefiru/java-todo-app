import propTypes from 'prop-types';
import TodoEntry from './TodoEntry';

function TodoTable({ todos }) {
  if (todos === undefined) {
    return (
      <div className="flex items-center justify-center w-full mt-16">
        <span className="loading loading-ring loading-lg" />
      </div>
    );
  }

  return (
    <div className="overflow-x-auto border-[1px] rounded-lg shadow">
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
          {todos?.map((t) => (
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
