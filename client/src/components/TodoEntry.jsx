import EditButton from './EditButton';
import propTypes from 'prop-types';

function TodoTableRow({ title, dueDateISO, isCompleted }) {
  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>{title}</td>
      <td>
        {new Date(dueDateISO).toLocaleString('en-US', {
          dateStyle: 'long',
          timeStyle: 'short',
        })}
      </td>
      <td>
        <div>
          <span
            className={`p-2 badge badge-sm ${
              isCompleted ? 'badge-success' : 'badge-error'
            }`}
          >
            {isCompleted ? 'Done' : 'To be done'}
          </span>
        </div>
      </td>
      <th>
        <EditButton />
      </th>
    </tr>
  );
}

TodoTableRow.propTypes = {
  title: propTypes.string.isRequired,
  dueDateISO: propTypes.string.isRequired,
  isCompleted: propTypes.bool.isRequired,
};

export default TodoTableRow;
