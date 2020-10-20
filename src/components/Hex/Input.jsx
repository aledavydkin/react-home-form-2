import React from 'react'
import PropTypes from 'prop-types'

function Hex(props) {
  const { color } = props

  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    if (hex.length === 7) {
      props.onHex(() =>
        result
          ? `rgb(${parseInt(result[1], 16)},${parseInt(
              result[2],
              16,
            )},${parseInt(result[3], 16)})`
          : 'error',
      )
    }
    return null
  }

  return (
    <form className="form">
      <input
        className="input"
        maxLength="7"
        onChange={(event) => hexToRgb(event.target.value)}
      />
      <div className="rbg">
        {color === 'error' ? 'Ошибка!' : color}
      </div>
    </form>
  )
}

Hex.propTypes = {
  color: PropTypes.string.isRequired,
  onHex: PropTypes.func.isRequired,
}

export default Hex
