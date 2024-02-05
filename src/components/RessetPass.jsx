import React from "react";
import './RessetPass.css'
import ModalWindow from './ModalWindow'
import BaseInput from './BaseInput'
import {ReactComponent as Logo} from '../icon/Logo.svg'
import {ReactComponent as SufixIcon} from '../icon/IconPassword.svg'
import BaseButton from './BaseButton'


export default function RessetPass (){

    return(
        <div>
            <ModalWindow>
                <div className="ResetPass_nameComp">Востановление пароля</div>
                <BaseInput className='ResetPass_BaseInput'placeholder='@reliab.tech'/>
                <BaseInput className='ResetPass_BaseInput' placeholder='Новый пороль' SufixIcon={SufixIcon}/>
                <BaseInput className='ResetPass_BaseInput' placeholder='Подтвердите пороль' SufixIcon={SufixIcon}/>
                <BaseButton  typeStyle='dark' className="ResetPass_button" >Сменить пароль</BaseButton>

                <Logo className="ResetPass_logo"/>
            </ModalWindow>
        </div>
    )
}