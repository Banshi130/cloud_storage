//общее окно инпута 
import React from "react";
import './styles.css'
import cn from "classnames";
import { useState } from "react";

// import { BaseButton } from "../BaseButton";
import { forwardRef } from "react";


export const BaseInput = forwardRef((props, ref) => {
    

    const HintIcon =props.HintIcon;

    
  
   console.log(props.err)

 
 

   
//props.isError

    return(
        <div className={cn("BaseInput",  props.className)}>
                     
            {props.label && <label  className="BaseInput_label">{props.label}</label>}
            <div className={cn("BaseInput_wrapInput", props.err&& "BaseInput--error")}> 
            <input 
            ref={ref} 
            onInput={(e)=>{props.onInput&&props.onInput(e)}} 
            onBlur={(e)=>{props.onBlur&&props.onBlur(e)}} 
            
            value={props.value} 
            name={props.name}
            type={props.type} 
            className="BaseInput_input"  
            placeholder={props.placeholder}
            
            
           
            />
                
            <div className="BaseInput_SufixComponent">{props.SufixComponent}</div>

            {HintIcon&& <HintIcon className="BaseInput_OuterIcon"/>}
            {props.helperText&& <p>{props.helperText}</p>}
            
        </div>
        {props.err && <p className="BaseInput_errortext"> {props.err} </p>} 
    </div>)
    });



// Рабочая версия инпута без обработчика скрытия пароля ->  пропса из ерор и див с текстом