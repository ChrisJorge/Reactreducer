import React from 'react'

function Button({type, payload, dispatch,text,cName,}) {
  return (
    <button onClick={() => {dispatch({type:type, payload:payload})}} className={cName}>{text}</button>
  )
}

export default Button