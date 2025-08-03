import { useState } from 'react'

const Button = (props) => {
  return(
    <button onClick = {props.onClick}>{props.text}</button>
  )
}

const StatisticsLine = (props) => {
  return (
    <p>{props.text  + ':' + props.value}</p>
  )
}

const Statistics = (props) =>{
  if (props.total === 0 ){
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
  )
  }
  return (
      <div>
      <h1>statistics</h1>
      <StatisticsLine text = "good" value = {props.good}/>
      <StatisticsLine text = "neutral" value = {props.neutral}/>
      <StatisticsLine text = "bad" value = {props.bad}/>
      <StatisticsLine text = "total" value = {props.total}/>
      <StatisticsLine text = "average" value = {props.average}/>
      <StatisticsLine text = "positive" value = {props.positivePercentage}/>
      </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood(good + 1)
  const handleBadClick = () => setBad(bad + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)

  const total = good + neutral + bad
  const average = total === 0 ? 0 : (good - bad) / total 
  const positivePercentage = total === 0 ? 0 : (good / total) *100

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick = {handleGoodClick} text = {'good'}/>
      <Button onClick = {handleNeutralClick} text = {'neutral'}/>
      <Button onClick = {handleBadClick} text = {'bad'}/>
      <Statistics 
        good={good} 
        neutral={neutral} 
        bad={bad} 
        total={total} 
        average={average} 
        positivePercentage={positivePercentage} 
      />


    </div>
  )
}

export default App