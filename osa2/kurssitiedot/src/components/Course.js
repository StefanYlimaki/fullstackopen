// Displays one content and its exercise amount
const Part = ({ part }) =>
  <p>
    {part.name} {part.exercises}
  </p>

// the contents of the course and their exercises amount
const PartContent = ({parts}) => {
  return(
    parts.map(part => <Part key={part.id} part={part} />)
  )
}

// Displays the total amount of exercises in the course
const Total = ({parts}) => {
  return(
    <p><strong>
      total of {
          parts.reduce(function(total, part) {return total + part.exercises}, 0)
        } exercises
    </strong></p>
  )
}

// Displays
// 1. the contents of the course and their exercises amount
// 2. the total amount of exercises in the course
const Content = ({ parts }) => {
  return(
    <>
      <PartContent parts={parts} />
      <Total parts={parts} />
    </>
  )
}

// Displays the course
const Course = ({course}) => {
  return (
    <>
      <h2>{course.name}</h2>
      <Content parts={course.parts} />
    </>
  )
}

export default Course
