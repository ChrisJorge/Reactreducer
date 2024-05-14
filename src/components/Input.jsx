import React from 'react'

function Input({state, setState}) {
  return (
    <input type='text' value={state} onChange={(text) => setState(text.target.value)}/>
  )
}

export default Input