import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = ({ buttonText, handleClick }) => {
  return <button onClick={handleClick}>{buttonText}</button>;
};

const Statistic = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad, averageScore }) => {
  const totalClicks = good + neutral + bad;
  const average = averageScore ? averageScore / totalClicks : 0;
  const positive = good ? (good * 100) / totalClicks + "%" : 0;

  return (
    <table>
      <tbody>
        <Statistic text="good" value={good} />
        <Statistic text="neutral" value={neutral} />
        <Statistic text="bad" value={bad} />
        <Statistic text="all" value={totalClicks} />
        <Statistic text="average" value={average} />
        <Statistic text="positive" value={positive} />
      </tbody>
    </table>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [averageScore, setAverageScore] = useState(0);
  const [isFeedback, setIsFeedback] = useState(false);

  const handleGoodClick = () => {
    setGood(good + 1);
    setAverageScore(averageScore + 1);
    setIsFeedback(true);
  };

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
    setIsFeedback(true);
  };

  const handleBadClick = () => {
    setBad(bad + 1);
    setAverageScore(averageScore - 1);
    setIsFeedback(true);
  };

  return (
    <>
      <h1>give feedback</h1>
      <Button buttonText="good" handleClick={handleGoodClick} />
      <Button buttonText="neutral" handleClick={handleNeutralClick} />
      <Button buttonText="bad" handleClick={handleBadClick} />
      <h1>statistics</h1>
      {isFeedback ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          averageScore={averageScore}
        />
      ) : (
        <p>No feedback given</p>
      )}
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
