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

// Displays all the different courses
const Courses = ({courses}) => {
  return (
      courses.map(course => <Course key={course.id} course={course} />)
  )
}

const App = () => {
  // Array of courses to be displayed
  const courses = [
    {
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
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  // return title and courses displayed
  return (
    <div>
      <h1>Web development curriculum</h1>
      <Courses courses={courses} />
    </div>
  )
}

export default App
