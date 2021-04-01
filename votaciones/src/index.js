import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h2>Give Feedback</h2>
      <button>Good</button>
      <button>Neutral</button>
      <button>Bad</button>
      <h2>Statistics</h2>
      <p>
        <strong>Good: </strong>
      </p>
      <p>
        <strong>Neutral: </strong>
      </p>
      <p>
        <strong>Bad: </strong>
      </p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

