import React from 'react'
import PropTypes from 'prop-types'

function Item(props) {
  const { item } = props

  return (
    <div className="">
      <span>{item.date}</span>
      <span>{item.distance}</span>
    </div>
  )
}

Item.propTypes = {
  item: PropTypes.object.isRequired,
}

export default Item
