import EditModal from './EditModal';
import propTypes from 'prop-types';

function TodoEntry({ id, title, dueDateISO, isCompleted }) {
  const dueDateRenderedValue =
    dueDateISO !== null
      ? new Date(dueDateISO).toLocaleString('en-US', {
          dateStyle: 'long',
          timeStyle: 'short',
        })
      : 'No due date';

  return (
    <tr>
      <th></th>
      <td>{title}</td>
      <td>{dueDateRenderedValue}</td>
      <td>
        <div>
          <span
            className={`p-2 w-16 badge badge-sm ${
              isCompleted ? 'badge-success' : 'badge-error'
            }`}
          >
            {isCompleted ? 'Complete' : 'Pending'}
          </span>
        </div>
      </td>
      <th>
        <EditModal
          id={id}
          title={title}
          dueDateISO={dueDateISO}
          isCompleted={isCompleted}
        />
      </th>
    </tr>
  );
}

TodoEntry.propTypes = {
  id: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  dueDateISO: propTypes.string,
  isCompleted: propTypes.bool.isRequired,
};

export default TodoEntry;
