const Header = ({ course }) => <h1>{course}</h1>;

const Total = ({ sum }) => <b>total of {sum} exercises</b>;

const Part = ({ name, exercises }) => (
  <p>
    {name} {exercises}
  </p>
);

const Content = ({ parts }) => (
  <div>
    {parts.map((part) => (
      <Part key={part.id} name={part.name} exercises={part.exercises} />
    ))}
  </div>
);

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total
        sum={course.parts.map((item) => {
            return item.exercises;
          })
          .reduce((l, r) => l + r, 0)}
      />
    </div>
  );
};

export default Course