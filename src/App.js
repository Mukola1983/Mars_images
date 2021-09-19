import React, { useState } from 'react'
import { getPhoto } from './API/rovers'

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

  const getApi = () => {
    getPhoto('Curiosity', 1, 1)
      .then((data) => {
        console.log(data.photos)
      })
      .catch(() => {})
  }
  return (
    <div>
      <p>{userInput}</p>
      <button onClick={getApi}>sssss</button>
      <input type="text" onChange={ochangeInput} />
      <button onClick={clickHandler}>clsssick</button>
    </div>
  )
}
