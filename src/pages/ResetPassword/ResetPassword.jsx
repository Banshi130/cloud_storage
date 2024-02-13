import React, {useState} from "react";
import './styles.css'
import { ModalWindow } from '../../components/ModalWindow/index';
import { BaseInput } from '../../components/BaseInput/index';
import { BaseButton } from '../../components/BaseButton/index';
import { ReactComponent as Logo} from '../../icon/Logo.svg'
// eslint-disable-next-line
import { ReactComponent as SufixComponent} from '../../icon/IconPassword.svg'
import { ReactComponent as HintIcon } from "../../icon/IconHint.svg";
import{PaswordInput} from "../../components/PasswordInput"

export const ResetPass = () => {

    const[errorr, setEror]=useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        })
    
        const blure=(e)=>{
          switch (e.target.name) {
            case "Пароль":
              if(!e.target.value){setEror({...errorr, password: "Ошибка: Поле не должно быть пустым "}); return }
              if( 8 >= e.target.value.length){setEror({...errorr, password: "Ошибка: Слишком короткий пароль "}) }
              console.log(e.target.value.lenght);
              break;
        
            case "email":
              const mailregxp= /@[reliab.tech]/g
              if(!e.target.value){setEror({...errorr, email: "Ошибка: Поле не должно быть пустым "}); return }
              console.log();
              if(mailregxp.test(e.target.value)){setEror({...errorr, email: ""})}else{setEror({...errorr, email: "Ошибка: Используйте @reliab.tech"})}
            break;  
          }
          
        }
        
        
        
          
          const validate = (e)=>{
        
            let nextVal = e.target.value.trim()
            if(!nextVal){
              e.target.value= nextVal
              return
            }
          
        
            switch(e.target.name){
                case 'email' : 
                setEror({...errorr, email: ""})
                e.target.value =  nextVal.replace(/([А-Яа-яЁё&=+<>,'&-])|(\.{2})/g, "")
                //somthing()
                break
                case 'Пароль' :
                setEror({...errorr, password: ""})
                e.target.value = nextVal.replace(/[^A-Za-z\._\d-]+/g,"").slice(0, 20)
        
                console.log("знначение")
                //somthing()
                break
    
            }
         }
    return(
        <div className="ResetPass">
            <ModalWindow classNameContent="ResetPass_modalContent">
            <form className="ResetPass_form"> 
                <h2 className="ResetPass_title">Восстановление пароля</h2>
                <div className="ResetPass_innerWrapForm">
                    <BaseInput
                    name="email" 
                    className='ResetPass_input'
                    placeholder='example@reliab.tech'
                    onBlur={blure} err={errorr.email}  onInput={validate}/>
                    <PaswordInput 
                    name="Пароль"
                    className='ResetPass_input' 
                    placeholder='Новый пароль'
                    HintIcon={HintIcon}
                    type="password" 
                     onBlur={blure} err={errorr.password}  onInput={validate}/>
                    <PaswordInput 
                    className='ResetPass_input' 
                    placeholder='Подтвердите пароль' 
                    type="password" 
                    onBlur={blure} err={errorr.password}  onInput={validate}/>  
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