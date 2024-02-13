import React, {useState} from 'react'
import { ModalWindow } from '../../components/ModalWindow/index'
import { BaseInput } from '../../components/BaseInput/index'
import { BaseButton } from '../../components/BaseButton/index'
import { ReactComponent as Logo } from '../../icon/Logo.svg'
import './styles.css'
import { ReactComponent as IconLogin } from '../../icon/IconLogin.svg'
import { Link } from "react-router-dom"
import{PaswordInput} from "../../components/PasswordInput"

export const LoginForm = () => {
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





  return (
    <div className="LoginForm">
      <ModalWindow classNameContent="LoginForm_modalContent">
        <form className="LoginForm_form">
          <h1 className="LoginForm_title">Облачное хранилище ТН</h1>
          <div className="LoginForm_innerWrapForm">
            <BaseInput 
              name="email"
              className="LoginForm_input__email" 
              type="email" 
              placeholder="example@reliab.tech" onInput={validate} onBlur={blure} err={errorr.email}/>
                      <PaswordInput  name="Пароль" onInput={validate}  label="Пароль" placeholder="" onBlur={blure} err={errorr.password}
           
                       
                        type="Password" />
            <div className="LoginForm_support">
              <BaseButton><Link to="/registration" className='LoginForm_link'>Регистрация</Link></BaseButton>
              <BaseButton><Link to="/resetpass" className='LoginForm_link'>Забыли пароль?</Link></BaseButton>
            </div>
            <BaseButton>
              <IconLogin />
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