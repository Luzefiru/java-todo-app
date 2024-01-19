import TodoTableRow from './TodoEntry';

function TodoTable() {
  return (
    <div className="overflow-x-auto">
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
          <TodoTableRow
            title={'Study Data Structures & Algorithms'}
            dueDateISO={'2024-01-16T23:55:54.906Z'}
            isCompleted={false}
          />
          <TodoTableRow
            title={'Take out the Trash'}
            dueDateISO={'2024-01-22T18:30:00.000Z'}
            isCompleted={true}
          />
        </tbody>
        {/* foot */}
      </table>
    </div>
  );
}

export default TodoTable;
