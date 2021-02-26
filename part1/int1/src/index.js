import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// const Header = (props) => {
//   return (
//     <div>
//       <h1>{props.course}</h1>
//     </div>
//   )
// }

// const Part = (props) => {
//   return (
//     <div>
//       <p>{props.part.name} {props.part.exercise}</p>
//     </div>
//   )
// }

// const Content = (props) => {
//   return (
//     <div>
//       <Part part={props.parts[0]} />
//       <Part part={props.parts[1]} />
//       <Part part={props.parts[2]} />
//     </div>
//   )
// }

// const Total = (props) => {
//   return (
//     <div>
//       <p>Number of exercises {props.parts[0].exercise + props.parts[1].exercise + props.parts[2].exercise}</p>
//     </div>
//   )
// }

// const Hello = (props) => {
//   const bornYear = () => {
//     const yearNow = new Date().getFullYear()
//     return yearNow - props.age
//   }

//   return (
//     <div>
//       <p>
//         Hello {props.name}, you are {props.age} years old
//       </p>
//       <p>
//         Born in {bornYear()}
//       </p>
//     </div>
//   )
// }

// const App = () => {
  // const course = 'Half Stack application development'
  // const parts = [
  //   {
  //     name: 'Fundamental of React',
  //     exercise: 10
  //   },
  //   {
  //     name: 'Using props to pass data',
  //     exercise: 7
  //   },
  //   {
  //     name: 'State of a component',
  //     exercise: 14
  //   }
  // ]
//   const name = 'Korld'
//   const age = 28

// 	return (
// 		<div>
//       <h1>Greetings</h1>
//       <Hello name="John" age={24 + 9} />
//       <Hello name={name} age={age} />
// 		</div>
// 	)
// }

const Display = ({ counter }) => <div>{counter}</div>

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const App = () => {
  const [ counter, setCounter ] = useState(0)

  const addOne = () => setCounter(counter + 1)
  const setZero = () => setCounter(0)
  const subOne = () => setCounter(counter - 1)

  return (
    <div>
      <Display counter={counter} />
      <Button 
        handleClick={addOne}
        text='plus'
      />
      <Button 
        handleClick={setZero}
        text='zero'
      />
      <Button 
        handleClick={subOne}
        text='minus'
      />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
