import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Feedback = ({ statistic, text }) => {
  return (
    <p>{text} {statistic}</p>
  )
}

const Statistic = ({ good, neutral, bad }) => {
  return (
    <div>
      <p>All {good+bad+neutral}</p>
      <p>Average {(good-bad)/(good+bad+neutral)}</p>
      <p>Positive {100*good/(good+bad+neutral)}</p>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={()=>setGood(good+1)} type="button">good</button> 
      <button onClick={()=>setNeutral(neutral+1)} type="button">neutral</button> 
      <button onClick={()=>setBad(bad+1)} type="button">bad</button>

      <h1>statistics</h1>
      <Feedback statistic={good} text='good' />
      <Feedback statistic={neutral} text='neutral' />
      <Feedback statistic={bad} text='bad' />
      <Statistic good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

