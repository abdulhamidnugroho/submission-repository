import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
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
      <p>TOTAL of {total} Exercises</p>
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

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts : [
      {
        name: 'Fundamental of React',
        exercise: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercise: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercise: 14,
        id: 3
      },
      {
        name: 'Saga',
        exercise: 12,
        id: 3
      }
    ]
  }

	return <Course course={course} />
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals