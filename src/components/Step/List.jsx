import React from 'react'
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid'
import Item from './Item'

function List(props) {
  const { items } = props

  return (
    <div className="">
      <div className="caption-row">
        <span className="caption">Дата(ДД.ММ.ГГ)</span>
        <span className="caption">Пройдено км</span>
        <span className="caption">Действия</span>
      </div>
      {items.map((item) => (
        <Item key={nanoid()} item={item} />
      ))}
    </div>
  )
}

List.propTypes = {
  items: PropTypes.array.isRequired,
}

export default List
