//общее окно инпута 
import React from "react";
import './BaseInput.css'
import { ReactComponent as Logo } from "../icon/IconPassword.svg";
export default ()=>{

return(
    <div>
    <label htmlFor="" className="label">Текст</label>
   <div className="wrapInput"> 
        <input className="input" type="text" placeholder="Пароль"/>
        <Logo className="logo"/>
        <Logo className="outerIcon"/>
        {/* //здесь должна быть иконнка визуально нутри инпута */}
    </div>
{/* // вннешняя иконка которая за инпутом. */}
</div>)
}
