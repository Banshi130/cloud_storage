//общее окно инпута 
import React from "react";
import './styles.css'
import cn from "classnames";
import { useState } from "react";
import { ReactComponent as VisIcon } from '../../icon/IconPassword.svg'
import { ReactComponent as HideIcon } from '../../icon/IconHidePassword.svg'
// import { BaseButton } from "../BaseButton";

export const BaseInput =  (props) => {
    const SufixComponent =props.SufixComponent;
    const HintIcon =props.HintIcon;
    const [ vis, setVis ] = useState(true);
    const [ type, setType ] = useState(props.type);
    const visablePass  =() => {
        setVis(!vis)
        if(vis === false) {
            setType("password")
        }else {
            setType("text")
        }
    }
    // const [ type, setType ] = useState(false);
    // const setNextType = () => {setType(!type);};
    // type={type ? 'text' : 'password'} 
    // {SufixIcon&& 
    //     <SufixIcon onClick={setNextType} className="BaseInput_SufixIcon"> 
    //         {type ? <HideIcon alt="Показать пароль"/> : <VisIcon alt="Скрыть пароль"/> 
    //         } 
    //     </SufixIcon>}

    return(
        <div className={cn("BaseInput",props.className)}>       
            {props.label && <label  className="BaseInput_label">{props.label}</label>}
            <div className="BaseInput_wrapInput"> 
            <input  
            onInput={(e)=>{props.onInput&&props.onInput(e)}} 
            onBlur={(e)=>{props.onBlur&&props.onBlur(e)}}  
            value={props.value} 
            name={props.name}
            type={type} 
            className="BaseInput_input"  
            placeholder={props.placeholder}
            />
            {SufixComponent&& 
                <SufixComponent onClick={visablePass} className="BaseInput_SufixComponent">    
                {vis ? <VisIcon/> : <HideIcon/>
                } 
            </SufixComponent>}
            {HintIcon&& <HintIcon className="BaseInput_OuterIcon"/>}
            {/* //здесь должна быть иконнка визуально нутри инпута */}
        </div>
    {/* // вннешняя иконка которая за инпутом. */}
    </div>)
    }



// Рабочая версия инпута без обработчика скрытия пароля ->

