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
  <ModalWindow>
    <div className="RegForm_Name">Регистрация</div>
    <BaseInput label="Фамилия"/>
    <BaseInput label="Имя"/>
    <BaseInput label="Пароль"   SufixIcon={VisIcon } HintIcon={HintIcon} type="Password"/>
    <BaseInput label="E-mail (Корпаротивный)" place placeholder="@reliab.tech" />
    <BaseButton typeStyle ='dark' className="RegForm_ButtonSetting">Регистрация</BaseButton> 
    <Logo className="RegForm_currentMargin"/>
  </ModalWindow>
</div>


)
 

}