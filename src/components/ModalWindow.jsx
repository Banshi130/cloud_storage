import React from "react";
import './ModalWindow.css'
import BaseInput from './BaseInput'
export default ()=>{
return(
    <div className="ModalWindow">
        <div className="ModalWindow_substrate"></div>
        <div className="ModalWindow_wrap">  
            {/* {Children} */}
            <BaseInput />


        </div>
    </div>
)
}