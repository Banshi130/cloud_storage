import React, { useState } from "react";
import { ModalWindow } from '../../components/ModalWindow/index';
import { BaseInput } from '../../components/BaseInput/index';
import { BaseButton } from '../../components/BaseButton/index';
import { ReactComponent as VisIcon } from "../../icon/IconPassword.svg";
import { ReactComponent as HintIcon } from "../../icon/IconHint.svg";
import { ReactComponent as Logo } from "../../icon/Logo.svg";
import { useRef } from 'react';
import{PaswordInput} from "../../components/PasswordInput"
import './styles.css'


export const RegForm = () => {
const[errorr, setEror]=useState({
                                  firstName: "",
                                  lastName: "",
                                  email: "",
                                  password: "",
                                  })

  const inputRef = useRef(null);
  

const blure=(e)=>{
  const regexp = /^[А-Я]+[а-я\-*/'*]+[а-я]+$/g
  switch (e.target.name) {
    case "Имя":
      // console.log(e.target.value);
      if(!e.target.value){setEror({...errorr, firstName: "Ошибка: Поле не должно быть пустым "}); return }
      if(regexp.test(e.target.value)){setEror({...errorr, firstName: ""})}else{setEror({...errorr, firstName: "Ошибка: Символ не может стоять в начале или конце слова "})}
      // console.log(e.target.value.match(/(^[А-Я]+[а-я\-/']+[а-я]+$)/g));
      break;
    case "Фамилия":
      if(!e.target.value){setEror({...errorr, lastName: "Ошибка: Поле не должно быть пустым "}); return }
      if(regexp.test(e.target.value)){setEror({...errorr, lastName: ""})}else{setEror({...errorr, lastName: "Ошибка: Символ не может стоять в начале или конце слова "})}
    break;

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
        case 'Имя' : 
        setEror({...errorr, firstName: ""})
        // .replace(/[^А-Яа-яЁё\-/']+/g, "" )
        e.target.value= nextVal.toLowerCase() .replace(/[^-А-Яа-яЁё']+/g, "" ).replace(/(^)[А-Яа-яЁё]/, function(x){ return x.toUpperCase(); }).slice(0, 20)
        
        break
        case 'Фамилия' : 
        setEror({...errorr, lastName: ""})
        e.target.value= nextVal.toLowerCase() .replace(/[^-А-Яа-яЁё']+/g, "" ).replace(/(^)[А-Яа-яЁё]/, function(x){ return x.toUpperCase(); }).slice(0, 20)
        //somthing()
        break

    }
 }


return(
    <div   className="RegForm">
      <div className='RegForm__content'>
        <form name="Reg" className="RegForm__form">
        <h1 className="RegForm__title">Регистрация</h1>
        <div className="RegForm__innerWrapForm">
          <BaseInput name="Фамилия" onInput={validate}   type='text'  label="Фамилия" required="required" onBlur={blure}  err={errorr.lastName} />
          <BaseInput name="Имя"  type='text' label="Имя" required="required" onInput={validate} onBlur={blure} ref={inputRef} err={errorr.firstName}/>
          <PaswordInput  name="Пароль"  label="Пароль" placeholder="" onBlur={blure} err={errorr.password}  onInput={validate}
           
          HintIcon={HintIcon} 
          type="Password" required="required"/>
          <BaseInput name="email" type="email" label="E-mail (Корпоративный)" 
          placeholder="example@reliab.tech" required="required" patern=".+@reliab\.tech" onInput={validate} onBlur={blure} err={errorr.email} />
          <BaseButton disable="" type='submit' typeStyle ='dark' className="RegForm_ButtonSetting">Регистрация</BaseButton> 
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
      </div>
    </div>
)
}