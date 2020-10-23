import React, { useState } from 'react'
import { nanoid } from 'nanoid'
import StepModel from './model'

function FormAdd(props) {
  const { onAdd, item } = props

  console.log()

  const [form, setForm] = useState({ date: '', distance: '' })

  const handleChange = (evt) => {
    const { name, value } = evt.target
    setForm((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newStep = new StepModel(nanoid(), form.date, form.distance)
    if (form.date === '' || !/^\d{2}([./-])\d{2}\1\d{4}$/.test(form.date)) {
      return null
    }
    if (form.distance === '' || !Number(form.distance)) {
      return null
    }
    onAdd(newStep)
    setForm({ date: '', distance: '' })
    return null
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Дата
        <input
          name="date"
          type="text"
          value={form.date}
          onChange={handleChange}
        />
      </label>
      <label>
        Пройдено км
        <input
          name="distance"
          type="text"
          value={form.distance}
          onChange={handleChange}
        />
      </label>
      <button type="button" onClick={handleSubmit}>
        Добавить
      </button>
    </form>
  )
}

export default FormAdd
