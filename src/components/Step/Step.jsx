import React, { useState } from 'react'
import FormAdd from './FormAdd'
import List from './List'
import StepModel from './model'

function Step() {
  const [step, setStep] = useState([])
  const [edit, setEdit] = useState('')

  const handleAdd = (newStep) =>
    setStep((prevSteps) => {
      if (prevSteps.find((o) => o.date === newStep.date)) {
        return prevSteps.map((o) => {
          if (o.date === newStep.date) {
            return new StepModel(
              o.id,
              o.date,
              Number(o.distance) + Number(newStep.distance),
            )
          }
          return o
        })
      }
      return [...prevSteps, newStep]
    })

  const handleRemove = (id) => {
    setStep((prevState) => prevState.filter((o) => o.id !== id))
  }
  const handleEdit = (id) => {
    setEdit(step.find((o) => o.id === id))
  }

  console.log(edit)

  return (
    <div className="container">
      <FormAdd onAdd={handleAdd} item={edit} />
      <List items={step} onRemove={handleRemove} onEdit={handleEdit} />
    </div>
  )
}

export default Step
