import propTypes from 'prop-types';
import statHelper from '../utils/statHelper';

function Dashboard({ todos }) {
  if (todos === undefined) {
    return (
      <div className="flex items-center justify-center w-full h-full">
        <span className="loading loading-ring loading-lg" />
      </div>
    );
  }

  return (
    <section className="border-[1px] rounded-lg shadow py-6 mb-4 flex flex-col md:flex-row justify-around px-4">
      <div className="flex items-center justify-center gap-2 md:gap-12">
        <div className="px-4 avatar md:px-0">
          <div className="w-full rounded-full aspect-square">
            <img src={getRandomAvatarImage()} />
          </div>
        </div>
        <div className="grid items-center py-4 prose">
          <h2 className="mb-2 text-base md:text-2xl">Welcome back, User.</h2>
          <blockquote>
            <p className="text-xs text-gray-500 md:text-base">
              What are your plans for today?
            </p>
          </blockquote>
        </div>
      </div>
      <div className="px-4 md:px-0 stats">
        <div className="items-center stat">
          <div className="text-base stat-figure"></div>
          <div className="stat-title">Tasks today</div>
          <div className="stat-value">
            {statHelper.getTasksOnCurrentDayLength(todos)}
          </div>
          <div className="stat-desc">to be done</div>
        </div>

        <div className="items-center stat">
          <div className="stat-figure text-accent"></div>
          <div className="stat-title">Tasks this week</div>
          <div className="stat-value">
            {statHelper.getTasksThisWeekLength(todos)}
          </div>
          <div className="stat-desc">to be done</div>
        </div>

        <div className="items-center stat">
          <div className="stat-figure"></div>
          <div className="stat-title">Tasks done</div>
          <div className="stat-value">
            {statHelper.getTasksPercentDone(todos)}%
          </div>
          <div
            className={`stat-desc ${
              statHelper.isNotTotallyCompleted(todos)
                ? 'text-error'
                : 'text-success'
            }`}
          >
            {statHelper.isNotTotallyCompleted(todos)
              ? `${statHelper.getRemainingTasksLength(todos)} tasks remaining`
              : 'good job! 🎉🎉'}
          </div>
        </div>
      </div>
    </section>
  );
}

Dashboard.propTypes = {
  todos: propTypes.arrayOf(propTypes.object).isRequired,
};

function hashStringToNumber(str, maxIndex) {
  const ASCII_VALUE = Array.from(str).reduce(
    (total, cur) => total + cur.charCodeAt(0),
    0
  );
  const SALT = 7;
  const HASH_VALUE = ASCII_VALUE * 31 * SALT;
  return HASH_VALUE % (maxIndex + 1);
}

function getRandomAvatarImage() {
  const IMAGE_ID_UPPER_BOUND = 70;
  const dateString = new Date().toISOString().split('T')[0];
  const HASH_VALUE = hashStringToNumber(dateString, IMAGE_ID_UPPER_BOUND);
  const GENDER = HASH_VALUE % 2 === 0 ? 'men' : 'women';
  return `https://randomuser.me/api/portraits/${GENDER}/${HASH_VALUE}.jpg`;
}

export default Dashboard;
