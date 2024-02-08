import React, { useState } from "react";
import { ModalWindow } from '../../components/ModalWindow/index';
import { BaseInput } from '../../components/BaseInput/index';
import { BaseButton } from '../../components/BaseButton/index';
import { ReactComponent as VisIcon } from "../../icon/IconPassword.svg";
import { ReactComponent as HintIcon } from "../../icon/IconHint.svg";
import { ReactComponent as Logo } from "../../icon/Logo.svg";
import './styles.css'
export const RegForm = () => {





  const [ check, setCheck ] = useState(true);
  const checed = (e)=>{
      switch(e.target.name){
        case 'id1':
        console.log("отработал");
        break
      }
        


  }
  const valid = (e)=>{
    switch(e.target.name){
        case 'email' : 
          e.target.value = e.target.value.trim()
        //somthing()
        break
        case 'Пароль' : 
        e.target.value = e.target.value.trim()
        console.log("знначение")
        //somthing()
        break
        case 'Имя' : 
        e.target.value = e.target.value.trim().replace(/[^А-Яа-яЁё]+/g, '')
        //somthing()
        break
        case 'Фамилия' : 
        e.target.value = e.target.value.trim()
        //somthing()
        break

    }
 }

  












return(
    <div   className="RegForm">
      <ModalWindow classNameContent='RegForm__modalContent'>
        <form name="Reg" className="RegForm__form">
        <h1 className="RegForm__title">Регистрация</h1>
        <div className="RegForm__innerWrapForm">
          <BaseInput name="Фамилия" onInput={valid}  onBlur={checed} type='text'  label="Фамилия" required="required"/>
          <BaseInput name="Имя"  type='text' label="Имя" required="required" onInput={valid} />
          <BaseInput  name="Пароль" onInput={valid}  label="Пароль" placeholder="" 
          SufixComponent={"true"} 
          HintIcon={HintIcon} 
          type="Password" required="required"/>
          <BaseInput name="email" type="email" label="E-mail (Корпоративный)" 
          placeholder="example@reliab.tech" required="required" patern=".+@reliab\.tech" onInput={valid} />
          <BaseButton type='submit' typeStyle ='dark' className="RegForm_ButtonSetting">Регистрация</BaseButton> 
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