import React from "react";
import './styles.css'
import { ModalWindow } from '../../components/ModalWindow/index';
import { BaseInput } from '../../components/BaseInput/index';
import { BaseButton } from '../../components/BaseButton/index';
import { ReactComponent as Logo} from '../../icon/Logo.svg'
// eslint-disable-next-line
import { ReactComponent as SufixComponent} from '../../icon/IconPassword.svg'
import { ReactComponent as HintIcon } from "../../icon/IconHint.svg";


export const ResetPass = () => {
    return(
        <div className="ResetPass">
            <ModalWindow classNameContent="ResetPass_modalContent">
            <form className="ResetPass_form"> 
                <h2 className="ResetPass_title">Восстановление пароля</h2>
                <div className="ResetPass_innerWrapForm">
                    <BaseInput 
                    className='ResetPass_input'
                    placeholder='example@reliab.tech'/>
                    <BaseInput 
                    className='ResetPass_input' 
                    placeholder='Новый пароль'
                    HintIcon={HintIcon}
                    type="password" 
                    SufixComponent={"text"}/>
                    <BaseInput 
                    className='ResetPass_input' 
                    placeholder='Подтвердите пароль' 
                    type="password" 
                    SufixComponent={"text"}/>  
                </div>
                    <BaseButton  
                        typeStyle='dark' 
                        className="ResetPass_button" >
                        Сменить пароль
                    </BaseButton>
                <a
                    className="ResetForm_link"
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