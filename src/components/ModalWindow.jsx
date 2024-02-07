import React from 'react'
import './ModalWindow.css'
import cn from 'classnames'
// import BaseInput from './BaseInput'
export default (props) => {
  return (
    <div className="ModalWindow">
      <div className="ModalWindow_substrate"></div>
      <div className={cn("ModalWindow_wrapContent", props.classNameContent)}>
        {props.children}
        {/* <BaseInput /> */}
      </div>
    </div>
  )
}