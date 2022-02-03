import react from 'react';


function Timer() {
  return (
    <div>

      <h2>
        {new Date().toLocaleTimeString()}
      </h2>
      <span>
        Tehran, Iran
      </span>
    </div>
  );
}

export default Timer;