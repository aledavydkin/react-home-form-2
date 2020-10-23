import React from 'react'
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid'
import Item from './Item'

function List(props) {
  const { items, onRemove: handleRemove, onEdit: handleEdit } = props

  return (
    <table className="table">
      <tr className="caption-row">
        <th className="caption">Дата(ДД.ММ.ГГ)</th>
        <th className="caption">Пройдено км</th>
        <th className="caption">Действия</th>
      </tr>
      {items.map((item) => (
        <Item
          key={nanoid()}
          item={item}
          onRemove={handleRemove}
          onEdit={handleEdit}
        />
      ))}
    </table>
  )
}

List.propTypes = {
  items: PropTypes.array.isRequired,
  onRemove: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
}

export default List
