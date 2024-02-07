import React from 'react'
import './BaseButton.css'
import cn from 'classnames'

export default (props) => {
  return (
    <button type={props.type} 
    onClick={(e) => props.onClick && props.onClick(e)} // Обрабатываем событие нажатия
    className={cn('BaseButton', 
    props.typeStyle === 'dark' ? 'BaseButton--dark' : 'BaseButton--default', // Получаем стиль кнопки
    props.className,
    )}>
      {props.children}
    </button>
  )
}

// typeStyle
// type
// onClick
// children