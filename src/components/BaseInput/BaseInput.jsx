//общее окно инпута 
import React from "react";
import './styles.css'
import cn from "classnames";

export const BaseInput =  (props) => {
const SufixIcon =props.SufixIcon;
const HintIcon =props.HintIcon;

return(
    <div className={cn("BaseInput",props.className)}>       
        {props.label && <label  className="BaseInput_label">{props.label}</label>}
        <div className="BaseInput_wrapInput"> 
        <input  onInput={(e)=>{props.onInput&&props.onInput(e)}} onBlur={(e)=>{props.onBlur&&props.onBlur(e)}}  value={props.value} name={props.name} type={props.type} className="BaseInput_input"  placeholder={props.placeholder}/>
        {SufixIcon&& <SufixIcon className="BaseInput_SufixIcon"/>}
        {HintIcon&& <HintIcon className="BaseInput_OuterIcon"/>}
        {/* //здесь должна быть иконнка визуально нутри инпута */}
    </div>
{/* // вннешняя иконка которая за инпутом. */}
</div>)
}