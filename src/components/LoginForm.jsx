import React from "react";
import ModalWindow from "./ModalWindow";
import BaseInput from "./BaseInput";
import BaseButton from "./BaseButton"
import { ReactComponent as Logo } from "../icon/Logo.svg";
import './LoginForm.css'
import {ReactComponent as buttonLogin} from "../icon/buttonLogin.svg"


export default function LoginForm() {


    return (
        <div className="LoginForm">
            <ModalWindow>
                <div className="LoginForm_name">Облачное хранилище ТН</div>
                <BaseInput />
                <BaseInput />            
            <div className="LoginForm_support">
                <BaseButton >Регистрация</BaseButton>
                <BaseButton >Забыли пароль</BaseButton> 
                
            </div>  
            <div>
                <BaseButton >"buttonLogin"</BaseButton>
            </div>
            
            <Logo/>  
            </ModalWindow>
            

        </div>
    )
}