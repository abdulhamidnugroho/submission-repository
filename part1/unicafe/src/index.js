import React, { useState } from 'react';
import ReactDOM from 'react-dom';

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

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={()=>setGood(good+1)} type="button">good</button> 
      <button onClick={()=>setNeutral(neutral+1)} type="button">neutral</button> 
      <button onClick={()=>setBad(bad+1)} type="button">bad</button>

      <h1>statistics</h1>
      <Statistic statistic={good} text='good' />
      <Statistic statistic={neutral} text='neutral' />
      <Statistic statistic={bad} text='bad' />
      <Statistic statistic={good+bad+neutral} text='all' />
      <Statistic statistic={(good-bad)/(good+bad+neutral)} text='average' />
      <Statistic statistic={100*good/(good+bad+neutral)} text='positive' />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

