import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by press the fckin btn
      </div>
    )
  }

  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleLeft = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRight = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }

  return (
    <div>
      {left}
      <Button onClick={handleLeft} text='left'/>
      <Button onClick={handleRight} text='right'/>
      {right}
      <History allClicks={allClicks} />
      <p>{allClicks.join(' ')}</p>
    </div>
  )
}

<<<<<<< HEAD
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts : [
      {
        name: 'Fundamental of React',
        exercise: 10
      },
      {
        name: 'Using props to pass data',
        exercise: 7
      },
      {
        name: 'State of a component',
        exercise: 14
      }
    ]
  }

	return (
		<div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
		</div>
	)
}

=======
>>>>>>> e4b738d52d59798673f95c977ceafae097d3446b
ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
