import  React,{useState}  from "react";
import './styles.css'
import { BaseInput } from "../BaseInput";
import { ReactComponent as VisIcon } from '../../icon/IconPassword.svg'
import { ReactComponent as HideIcon } from '../../icon/IconHidePassword.svg'



export const PaswordInput = (props)=>{
const[isOpenPass, setOpenPass]=useState(false)
   const SufixComponent=isOpenPass?VisIcon:HideIcon


    return(
        <BaseInput {...props} SufixComponent={<SufixComponent onClick={()=>{setOpenPass(!isOpenPass)}}/>} type={isOpenPass ? "text" : "password"} />
    )
}