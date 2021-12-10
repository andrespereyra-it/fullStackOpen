import React from "react";
import ReactDOM from "react-dom";

const Header = ({ course }) => {
  return <h1>{course}</h1>;
};

const Content = ({ part1, part2, part3 }) => {
  console.log("Content" + part1 + part2 + part3);
  return (
    <>
      <Part parts={part1[0].name} exercises={part1[0].exercise} />
      <Part parts={part2[0].name} exercises={part2[0].exercise} />
      <Part parts={part3[0].name} exercises={part3[0].exercise} />
    </>
  );
};

const Part = ({ parts, exercises }) => {
  console.log("Part" + parts + exercises);
  return (
    <p>
      {parts} {exercises}
    </p>
  );
};

const Total = ({ part1, part2, part3 }) => {
  return (
    <p>
      Number of exercises{" "}
      {part1[0].exercise + part2[0].exercise + part3[0].exercise}
    </p>
  );
};

const App = () => {
  const course = "Half Stack application development";

  const part1 = [
    {
      name: "Fundamentals of React",
      exercise: 10,
    },
  ];

  const part2 = [
    {
      name: "Using props to pass data",
      exercise: 7,
    },
  ];

  const part3 = [
    {
      name: "State of a component",
      exercise: 14,
    },
  ];

  console.log("App" + part1 + part2 + part3);

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total part1={part1} part2={part2} part3={part3} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
