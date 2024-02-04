import React from "react"
import { useState } from "react";
// import { ReactComponent as BaseButton } from "/Users/jemho/Documents/html/cloud/cloud_storage/src/icon/button.svg";
import './BaseButton.css';
import classNames from "classnames";

export default (props)=>{
const registrationButton = props.registrationButton;
const resetPasswordButton = props.resetPasswordButton;
  return (
    <div className="TemplateButton">
      <button className="baseButton"></button>
      <button className="textButton" >{props.value}</button>
    </div>
    
  );
};
