//общее окно инпута 
import React from "react";
import './BaseInput.css'
import { ReactComponent as VisIcon } from "../icon/IconPassword.svg";
import { ReactComponent as HintIcon } from "../icon/IconHint.svg";
export default ({leb})=>{
console.log(leb);
return(
    <div className="BaseInput">
    <label htmlFor="" className="BaseInput_label">{leb}</label>
   <div className="BaseInput_wrapInput"> 
        <input className="BaseInput_input" type="text" placeholder="Пароль"/>
        <VisIcon className="BaseInput_SufixIcon"/>
        <HintIcon className="BaseInput_OuterIcon"/>
        {/* //здесь должна быть иконнка визуально нутри инпута */}
    </div>
{/* // вннешняя иконка которая за инпутом. */}
</div>)
}
