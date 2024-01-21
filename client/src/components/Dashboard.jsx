function Dashboard() {
  return (
    <section className="border-[1px] rounded-lg shadow py-6 mb-4 flex gap-8 justify-around">
      <div className="flex items-center gap-8">
        <div className="avatar">
          <div className="w-32 rounded-full">
            <img src={getRandomAvatarImage()} />
          </div>
        </div>
        <div className="grid items-center py-4 prose">
          <h2 className="mb-2">Welcome back, User.</h2>
          <blockquote>
            <p>What are your plans for today?</p>
          </blockquote>
        </div>
      </div>
      <div className="stats">
        <div className="stat">
          <div className="stat-figure text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Total Likes</div>
          <div className="stat-value text-primary">25.6K</div>
          <div className="stat-desc">21% more than last month</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Page Views</div>
          <div className="stat-value text-secondary">2.6M</div>
          <div className="stat-desc">21% more than last month</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary"></div>
          <div className="stat-value">86%</div>
          <div className="stat-title">Tasks done</div>
          <div className="stat-desc text-secondary">31 tasks remaining</div>
        </div>
      </div>
    </section>
  );
}

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
