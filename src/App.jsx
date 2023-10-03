import { useState } from 'react'
import Button from './components/Button/Button'
import Statistics from './components/Statistics/Statistics'
import Anecdotes from './components/Anecdotes/Anecdotes'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodCounter = () => setGood (good + 1);
  const badCounter = () => setBad(bad +1);
  const neutralCounter = () => setNeutral(neutral +1);

   const all = good + neutral + bad;
   const average = (good - bad) / all; 
   const positive = good / all * 100;

  return (
    <>
    <div>
      <h1>give feedback</h1>
      <br/>
      <Button handleClick={goodCounter} text="good" />
      <Button handleClick={neutralCounter} text="neutral" />
      <Button handleClick={badCounter} text="bad" />
      </div>
      <h1>statistics</h1>
      { all <= 0 ? <p>No feedback given </p> :
        <Statistics good={good} bad={bad} neutral={neutral} all={all} average={average} positive={positive} />}
      <Anecdotes />
    </>
  )
}

export default App