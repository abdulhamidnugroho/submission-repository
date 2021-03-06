import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const Statistic = ({statistic, text}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{statistic}</td>
    </tr>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  if (good + neutral + bad === 0) {
    return (
      <div>
        <p>There is no feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <table>
        <tbody>
          <Statistic statistic={good} text="Good"/>
          <Statistic statistic={neutral} text="Neutral"/>
          <Statistic statistic={bad} text="Bad"/>
          <tr>
            <td>All</td>
            <td>{good+bad+neutral}</td>
          </tr>
          <tr>
            <td>Average</td>
            <td>{(good-bad)/(good+bad+neutral)}</td>
          </tr>
          <tr>
            <td>Positive</td>
            <td>{100*good/(good+bad+neutral)}</td>
          </tr>
        </tbody>
      </table>
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
      <Button onClick={()=>setGood(good+1)} text='good' />
      <Button onClick={()=>setNeutral(neutral+1)} text='neutral' />
      <Button onClick={()=>setBad(bad+1)} text='bad' />

      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

