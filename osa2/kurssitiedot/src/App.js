const Part = ({ part }) =>
  <p>
    {part.name} {part.exercises}
  </p>

const PartContent = ({parts}) => {
  return(
    parts.map(part => <Part key={part.id} part={part} />)
  )
}

const Total = ({parts}) => {
  return(
    <p><strong>
      total of {
          parts.reduce(function(total, part) {return total + part.exercises}, 0)
        } exercises
    </strong></p>
  )
}

const Content = ({ parts }) => {
  return(
    <>
      <PartContent parts={parts} />
      <Total parts={parts} />
    </>
  )
}

const Course = ({course}) => {
  return (
    <>
      <h1>{course.name}</h1>
      <Content parts={course.parts} />
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

export default App
