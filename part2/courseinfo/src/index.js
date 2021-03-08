import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const course = [
  {
    name: 'Half Stack application development',
    id: 1,
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
  },
  {
    name: 'Node.js',
    id: 2,
    parts : [
      {
        name: 'Routing',
        exercise: 10,
        id: 1
      },
      {
        name: 'Middlewares',
        exercise: 7,
        id: 2
      },
    ]
  }
]

ReactDOM.render(<App course={course} />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals