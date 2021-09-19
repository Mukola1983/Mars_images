import React, { useState, useEffect, useCallback } from 'react'

export default function App() {
  const [userInput, setUserInput] = useState('dfsdfsd')
  const [value, setValue] = useState('')
  const ochangeInput = (e) => {
    e.preventDefault()
    setValue(e.target.value)
  }
  const clickHandler = () => {
    setUserInput(value)
  }
  return (
    <div>
      <p>{userInput}</p>
      <input type="text" onChange={ochangeInput} />
      <button onClick={clickHandler}>click</button>
    </div>
  )
}
