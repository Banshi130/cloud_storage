import React from "react";
import ModalWindow from "./ModalWindow";
import BaseInput from "./BaseInput";
import BaseButton from "./BaseButton"
import { ReactComponent as Logo } from "../icon/Logo.svg";
import './LoginForm.css'
import {ReactComponent as ButtonLogin} from "../icon/buttonLogin.svg";
import { ReactComponent as VisIcon } from "../icon/IconPassword.svg";


export default function LoginForm() {
    return (
        <div className="LoginForm">
            <ModalWindow>
            <div className="LoginForm_name">Облачное хранилище ТН</div>
                <BaseInput className="LoginForm_input" placeholder="@reliab.tech"/>
                <BaseInput className="LoginForm_input" type="password" placeholder="Пароль" SufixIcon={VisIcon}/>            
            <div className="LoginForm_support">
                <BaseButton >Регистрация</BaseButton>
                <BaseButton >Забыли пароль?</BaseButton>                
            </div>  
            <div className="LoginForm_bittonLogIn">
                <BaseButton><ButtonLogin/></BaseButton>
            </div>            
            <Logo/>  
            </ModalWindow>
            

        </div>
    )
}