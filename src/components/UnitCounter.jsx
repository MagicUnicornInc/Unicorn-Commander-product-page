import React from 'react'

function UnitCounter({ initial, total }) {
  return (
    <div className="text-center">
      <div className="text-3xl font-bold">{initial}</div>
      <div className="text-sm">units remaining of {total}</div>
    </div>
  )
}

export default UnitCounter
