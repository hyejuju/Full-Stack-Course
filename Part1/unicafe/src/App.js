import { useState } from 'react'
const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const StatisticLine = (props) => {
  if(props.text ==="positive"){
    return <tr>
    <td>{props.text}</td>
    <td>{props.value} %</td>
    </tr>
  }
  return (<tr>
  <td>{props.text}</td>
  <td>{props.value}</td>
  </tr>);
}

const Statistics = (props) => {
  var all = props.good + props.neutral + props.bad;
  var average = (props.good - props.bad)/all;
  var positive = props.good / all;
  if(all === 0) return <p>No feedback given</p>
  return (
  <table>
    <tbody>
    <StatisticLine text="good" value={props.good}></StatisticLine>
    <StatisticLine text="neutral" value={props.neutral}></StatisticLine>
    <StatisticLine text="bad" value={props.bad}></StatisticLine>
    <StatisticLine text="all" value={all}></StatisticLine>
    <StatisticLine text="average" value={average}></StatisticLine>
    <StatisticLine text="positive" value={positive}></StatisticLine>
    </tbody>
  </table>);
}   


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
    <h1>give feedback</h1>
    <Button handleClick={()=>setGood(good+1)} text="good"></Button>
    <Button handleClick={()=>setNeutral(neutral+1)} text="neutral"></Button>
    <Button handleClick={()=>setBad(bad+1)} text="bad"></Button>
    
    <h1>statistics</h1>
    <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    </div>
  )
}

export default App