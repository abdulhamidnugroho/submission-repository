import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const Statistic = ({ statistic, text }) => {
  return (
    <p>{text} {statistic}</p>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodFn = () => setGood(good + 1)

  const neutralFn = () => setNeutral(neutral + 1)

  const badFn = () => setBad(bad + 1)
  

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={goodFn} text='good' />
      <Button onClick={neutralFn} text='neutral' />
      <Button onClick={badFn} text='bad' />
      <h1>statistics</h1>
      <Statistic statistic={good} text='good' />
      <Statistic statistic={neutral} text='neutral' />
      <Statistic statistic={bad} text='bad' />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

