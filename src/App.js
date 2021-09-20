import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
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
    getPhoto(value, 1, 1)
      .then((data) => {
        console.log(data.photos)
      })
      .catch(() => {})
  }

  const dispatch = useDispatch()
  const cash = useSelector((state) => state.cashReduser.cash)
  const customers = useSelector((state) => state.customerReduser.customers)

  const addCash = (cash) => {
    dispatch({ type: 'ADD_CASH', payloud: cash })
  }

  const getCash = (cash) => {
    dispatch({ type: 'GET_CASH', payloud: cash })
  }

  const addCustomer = (name) => {
    const costumer = {
      name,
      id: Date.now(),
    }
    dispatch({ type: 'ADD_CUSTOMER', payloud: costumer })
  }

  const removeCustomer = (customer) => {
    dispatch({ type: 'REMOVE_CUSTOMER', payloud: customer.id })
  }

  return (
    <div>
      <p>{cash}</p>
      <button
        onClick={() => {
          addCash(Number(prompt()))
        }}
      >
        add cash
      </button>
      <button
        onClick={() => {
          getCash(Number(prompt()))
        }}
      >
        get cash
      </button>

      <button
        onClick={() => {
          addCustomer(prompt())
        }}
      >
        Add customer
      </button>

      <div>
        {customers.length > 0 ? (
          <div>
            {customers.map((customer) => (
              <div key={customer.id} onClick={() => removeCustomer(customer)}>
                {customer.name}
              </div>
            ))}
          </div>
        ) : (
          <div>
            <p>customers list is empty</p>
          </div>
        )}
      </div>
    </div>
  )
}
