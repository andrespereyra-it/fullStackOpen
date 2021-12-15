import React from "react";

const Header = ({ course }) => {
  return <h2>{course.name}</h2>;
};

const Content = ({ course }) => {
  return (
    <div>
      <Part course={course} />
    </div>
  );
};

const Total = ({ course }) => {
  const total = course.parts.reduce((sum, part) => {
    return sum + part.exercises;
  }, 0);
  return (
    <p>
      <strong>total of {total} exercises</strong>
    </p>
  );
};

const Part = ({ course }) => {
  return (
    <>
      {course.parts.map((part) => (
        <p key={part.id}>
          {part.name} {part.exercises}
        </p>
      ))}
    </>
  );
};

const Course = ({ courses }) => {
  return (
    <div>
      {courses.map((course) => (
        <div key={course.id}>
          <Header course={course} />
          <Content course={course} />
          <Total course={course} />
        </div>
      ))}
    </div>
  );
};

export default Course;
