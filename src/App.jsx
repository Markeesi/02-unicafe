import { useState } from 'react'
import Button from './components/Button/Button'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodCounter = () => setGood (good + 1);
  const badCounter = () => setBad(bad +1);
  const neutralCounter = () => setNeutral(neutral +1);

  return (
    <>
    <div>
      <h1>give feedback</h1>
      <br/>
      <Button handleClick={goodCounter} text="good" />
      <Button handleClick={neutralCounter} text="neutral" />
      <Button handleClick={badCounter} text="bad" />
    </div>
    <div>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </div>
    </>
  )
}

export default App