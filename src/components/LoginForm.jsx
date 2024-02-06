import React from 'react'
import ModalWindow from './ModalWindow'
import BaseInput from './BaseInput'
import BaseButton from './BaseButton'
import { ReactComponent as Logo } from '../icon/Logo.svg'
import './LoginForm.css'
import { ReactComponent as ButtonLogin } from '../icon/buttonLogin.svg'
import { ReactComponent as VisIcon } from '../icon/IconPassword.svg'

export default function LoginForm() {
  return (
    <div className="LoginForm">
      <ModalWindow classNameContent="LoginForm_modalContent">
        <form className="LoginForm_form">
          <h1 className="LoginForm_title">Облачное хранилище ТН</h1>
          <div className="LoginForm_innerWrapForm">
            <BaseInput className="LoginForm_input" type="email" placeholder="@reliab.tech" />
            <BaseInput
              className="LoginForm_input"
              type="Password"
              placeholder="Пароль"
              SufixIcon={VisIcon}
            />
            <div className="LoginForm_support">
              <BaseButton href="#">Регистрация</BaseButton>
              <BaseButton href="#">Забыли пароль?</BaseButton>
            </div>
            <BaseButton>
              <ButtonLogin />
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