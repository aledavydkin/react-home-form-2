import React, { useState } from 'react'
import Input from './Input'

function Hex() {
  const [color, setColor] = useState('rgb(128, 128, 128)')

  const style = {
    backgroundColor: color === 'error' ? 'rgb(254, 42, 8)' : color,
  }

  return (
    <div className="container" style={style}>
      <Input color={color} onHex={setColor} />
    </div>
  )
}

export default Hex
