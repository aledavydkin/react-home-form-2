import React, { useState } from 'react'
import FormAdd from './FormAdd'
import List from './List'
import StepModel from './model'

function Step() {
  const [step, setStep] = useState([])

  const handleAdd = (newStep) => {
    if (step.find((o) => o.date === newStep.date)) {
      setStep((prevSteps) =>
        prevSteps.map((o) => {
          if (o.date === newStep.date)
            return new StepModel(
              o.id,
              o.date,
              Number(newStep.distance) + Number(o.distance),
            )
          console.log(o)
          return o
        }),
      )
    }
    return setStep((prevSteps) => [...prevSteps, newStep])
  }

  console.log(step)
  return (
    <div className="container">
      <FormAdd onAdd={handleAdd} />
      <List items={step} />
    </div>
  )
}

export default Step
