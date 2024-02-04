import React from 'react'
import './ModalWindow.css'
// import BaseInput from './BaseInput'
export default (props) => {
  return (
    <div className="ModalWindow">
      <div className="ModalWindow_substrate"></div>
      <div className="ModalWindow_wrapContent">
        {props.children}
        {/* <BaseInput /> */}
      </div>
    </div>
  )
}