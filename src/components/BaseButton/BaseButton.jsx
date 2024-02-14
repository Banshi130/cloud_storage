import React from 'react';
import './styles.css';
import cn from 'classnames';

export const BaseButton = (props) => {
  return (
    <button
      disabled={props.disabled}
      type={props.type || "button"}
      onClick={(e) => props.onClick && props.onClick(e)} // Обрабатываем событие нажатия
      className={cn(
        'BaseButton',
        props.typeStyle === 'dark' ? 'BaseButton--dark' : 'BaseButton--default', // Получаем стиль кнопки
        props.className,
        
      )}
    >

      {props.children}
    </button>
  );
}

// typeStyle
// type
// onClick
// children
