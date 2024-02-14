import React, {useRef, useState} from "react";
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
    
  
  const pass1 =useRef()
   
    
    const[errorr, setEror]=useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        repitepass:"",
        })
    
        const blure=(e)=>{
            // let passV="не дошел"
          switch (e.target.name) {
            
            case "Пароль":
              if(!e.target.value){setEror({...errorr, password: "Ошибка: Поле не должно быть пустым "}); return }
              if( 8 >= e.target.value.length){setEror({...errorr, password: "Ошибка: Слишком короткий пароль "}) } 
              pass1.current=e.target.value
              //passV.first=e.target.value

              break;
             case "Пароль2":
                if(!e.target.value){setEror({...errorr, repitepass: "Ошибка: Поле не должно быть пустым "}); return }
                if(pass1.current !==e.target.value){setEror({...errorr, repitepass: "Ошибка: пароли не совпадают "})}else{setEror({...errorr, repitepass: ""})}
                 console.log(pass1.current);
                
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
                break
                case 'Пароль2' :
                    setEror({...errorr, password: ""})
                    e.target.value = nextVal.replace(/[^A-Za-z\._\d-]+/g,"").slice(0, 20)
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
                    name="Пароль2"
                    className='ResetPass_input' 
                    placeholder='Подтвердите пароль' 
                    type="password" 
                    onBlur={blure} err={errorr.repitepass}  onInput={validate}/>  
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