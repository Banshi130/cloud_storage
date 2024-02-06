import React from 'react'
import './styles.css'
import cn from 'classnames' 

export const ModalWindow = (props) => {
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