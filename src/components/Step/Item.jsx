import React from 'react'
import PropTypes from 'prop-types'

function Item(props) {
  const { item, onRemove: handleRemove, onEdit: handleEdit } = props

  return (
    <tr className="">
      <td className="item">{item.date}</td>
      <td className="item">{item.distance}</td>
      <td className="item">
        <button type="button" onClick={() => handleRemove(item.id)}>
          ✎
        </button>
        <button type="button" onClick={() => handleEdit(item.id)}>
          Редактировать
        </button>
      </td>
    </tr>
  )
}

Item.propTypes = {
  item: PropTypes.object.isRequired,
  onRemove: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
}

export default Item
