import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Statistic = ({ good, neutral, bad }) => {
  if (good + neutral + bad === 0) {
    return (
      <div>
        <p>There is no feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <p>Good : {good}</p>
      <p>Neutral : {neutral}</p>
      <p>Bad : {bad}</p>

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

