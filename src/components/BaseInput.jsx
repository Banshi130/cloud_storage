//общее окно инпута 
import React, { useState } from "react";
import './BaseInput.css'
import { useReducer } from 'react';
import cn from "classnames"; 
import { bottom } from "@popperjs/core";
import { ReactComponent as HideIcon } from "../icon/IconHidePassword.svg";
import { ReactComponent as VisIcon } from "../icon/IconPassword.svg";

import BaseButton from "./BaseButton";
export default (props)=>{
    const [ vis, setVis ] = useState(false);
    const [ type, setType ] = useState(props.type);

const HintIcon =props.HintIcon;
// const [type, setType]= useState(props.type)

const visablePass  =() => {
    

    setVis(!vis)
    if(vis === false){
        setType("password")

    }else {
        setType("text")
      

    }
    
}

return(
    <div className={cn("BaseInput",props.className)}>
        
   {props.label && <label  className="BaseInput_label">{props.label}</label>}
   <div className="BaseInput_wrapInput"> 
        <input  onInput={(e)=>{props.onInput&&props.onInput(e)}} 
        onBlur={(e)=>{props.onBlur&&props.onBlur(e)}} 
         value={props.value} name={props.name}
        type={type} className="BaseInput_input"  placeholder={props.placeholder}/>


       <SufixComponent  className='BaseInput_SufixComponent' onClick={visablePass}>    {vis ? <VisIcon/>: <HideIcon/>  } </SufixComponent>
 
     

       
        
        {HintIcon&& <HintIcon className="BaseInput_OuterIcon"/>}
        {/* //здесь должна быть иконнка визуально нутри инпута */}
    </div>
{/* // вннешняя иконка которая за инпутом. */}
</div>)
}
//label : string
//SufixIcon component
//HintIcon component
//value : string
//placeholder  : string
//type : string
//name : string
//onInput : function
//onBlur  : function
//isError : bolean 
//helperText : string
//className :string {на реакт компонент ннельзя навесить более одного класса нннужнна библа class names}


/// MB  нужен тайп скрипт на прожкт нужно погуглить как добавить и что вообще.