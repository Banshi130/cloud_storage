//общее окно инпута 
import React, { useState } from "react";
import './BaseInput.css'
import { useReducer } from 'react';
import cn from "classnames"; 

export default (props)=>{
const [vis, setVis]= useState()
const CurrentType = props.type
const SufixComponent =props.SufixComponent;
const HintIcon =props.HintIcon;
// const [type, setType]= useState(props.type)


const visablePass = async () =>{
    setVis('text')
}
  


return(
    <div className={cn("BaseInput",props.className)}>
        
   {props.label && <label  className="BaseInput_label">{props.label}</label>}
   <div className="BaseInput_wrapInput"> 
        <input  onInput={(e)=>{props.onInput&&props.onInput(e)}} 
        onBlur={(e)=>{props.onBlur&&props.onBlur(e)}} 
         value={props.value} name={props.name}
        type={CurrentType} className="BaseInput_input"  placeholder={props.placeholder}/>
       {SufixComponent&& <button onClick={visablePass}>
        <SufixComponent className="BaseInput_SufixComponent"/></button>}
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