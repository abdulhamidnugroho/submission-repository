import React from 'react'

const Header = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
    </div>
  )
}
  
const Part = (props) => {
  return (
    <div>
      <p>{props.part.name} {props.part.exercise}</p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      {props.parts.map((part) => 
        <Part key={part.id} part={part} />
      )}
    </div>
  )
}

const Total = parts => {
  const total = parts.parts.reduce((init, value) => init + value.exercise, 0)

  return (
    <div>
      <p><b>TOTAL of {total} Exercises</b></p>
    </div>
  )
}

const Course = (props) => {
  return (
    <div>
      <Header name={props.course.name} />
      <Content parts={props.course.parts} />
      <Total parts={props.course.parts} />
    </div>
  )
}

export default Course
  