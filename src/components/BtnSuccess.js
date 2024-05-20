import React from "react";
import "../styles/buttons.css"
export default function BtnSuccess(props, {onClick})
{
    return(
        <button className="btn-success" onClick={onClick}>
            {props.text}
        </button>
    )

}