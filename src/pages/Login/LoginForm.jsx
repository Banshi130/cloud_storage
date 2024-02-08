import React from 'react'
import { ModalWindow } from '../../components/ModalWindow/index'
import { BaseInput } from '../../components/BaseInput/index'
import { BaseButton } from '../../components/BaseButton/index'
import { ReactComponent as Logo } from '../../icon/Logo.svg'
import './styles.css'
import { ReactComponent as IconLogin } from '../../icon/IconLogin.svg'
import { Link } from "react-router-dom"

export const LoginForm = () => {
  return (
    <div className="LoginForm">
      <ModalWindow classNameContent="LoginForm_modalContent">
        <form className="LoginForm_form">
          <h1 className="LoginForm_title">Облачное хранилище ТН</h1>
          <div className="LoginForm_innerWrapForm">
            <BaseInput 
              className="LoginForm_input__email" 
              type="email" 
              placeholder="example@reliab.tech" />
            <BaseInput
              className="LoginForm_input"
              type= "password"
              placeholder="Пароль"
              SufixComponent={"true"}
            />
            <div className="LoginForm_support">
              <BaseButton><Link to="/registration" className='LoginForm_link'>Регистрация</Link></BaseButton>
              <BaseButton><Link to="/resetpass" className='LoginForm_link'>Забыли пароль?</Link></BaseButton>
            </div>
            <BaseButton>
              <IconLogin />
            </BaseButton>
          </div>
          <a
            className="LoginForm_link"
            href="https://reliab.tech/"
            target="_blank"
            rel="noreferrer"
          >
            <Logo />
          </a>
        </form>
      </ModalWindow>
    </div>
    
  )
}