import React from "react";
import { ModalWindow } from '../../components/ModalWindow/index';
import { BaseInput } from '../../components/BaseInput/index';
import { BaseButton } from '../../components/BaseButton/index';
import { ReactComponent as VisIcon } from "../../icon/IconPassword.svg";
import { ReactComponent as HintIcon } from "../../icon/IconHint.svg";
import { ReactComponent as Logo } from "../../icon/Logo.svg";
import './styles.css'


export const RegForm = () => {

return(
    <div   className="RegForm">
      <ModalWindow classNameContent='RegForm__modalContent'>
        <form className="RegForm__form">
        <h1 className="RegForm__title">Регистрация</h1>
        <div className="RegForm__innerWrapForm">
          <BaseInput label="Фамилия"/>
          <BaseInput label="Имя"/>
          <BaseInput label="Пароль"
          SufixComponent={VisIcon } 
          HintIcon={HintIcon} 
          type="Password"/>
          <BaseInput label="E-mail (Корпоративный)" 
          placeholder="example@reliab.tech" />
          <BaseButton typeStyle ='dark' className="RegForm_ButtonSetting">Регистрация</BaseButton> 
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