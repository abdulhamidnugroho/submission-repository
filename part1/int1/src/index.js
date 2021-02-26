import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  // const [left, setLeft] = useState(0)
  // const [right, setRight] = useState(0)
  const [clicks, setClicks] = useState({
    left: 0, right:0
  })

  const handleLeft = () => {
    setClicks({
      ...clicks,
      left: clicks.left + 1,
    })
  }

  const handleRight = () => {
    setClicks({
      ...clicks,
      right: clicks.right + 1
    })
  }

  return (
    <div>
      {clicks.left}
      <button onClick={handleLeft}>
        left
      </button>
      <button onClick={handleRight}>
        right
      </button>
      {clicks.right}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
