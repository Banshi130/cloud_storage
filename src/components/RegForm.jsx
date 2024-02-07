import React from "react";
import ModalWindow from "./ModalWindow";
import BaseInput from "./BaseInput";
import BaseButton from "./BaseButton"
import { ReactComponent as VisIcon } from "../icon/IconPassword.svg";
import { ReactComponent as HintIcon } from "../icon/IconHint.svg";
import { ReactComponent as Logo } from "../icon/Logo.svg";
import './RegForm.css'


export default function RegForm (){




return(


<div   className="RegForm">
  <ModalWindow classNameContent='RegForm__modalContent'>
    <form className="RegForm__form">
    <h1 className="RegForm__title">Регистрация</h1>
    <div className="RegForm__innerWrapForm">
      <BaseInput label="Фамилия"/>
      <BaseInput label="Имя"/>
      <BaseInput label="Пароль"   SufixComponent={VisIcon } HintIcon={HintIcon} type="Password"/>
      <BaseInput label="E-mail (Корпоративный)" place placeholder="example@reliab.tech" />
      <BaseButton typeStyle ='dark' className="RegForm_ButtonSetting">Регистрация</BaseButton> 
    </div>
    <a href="">
      <Logo className="RegForm_currentMargin"/>
    </a>
    </form>
  </ModalWindow>
</div>


)
 

}