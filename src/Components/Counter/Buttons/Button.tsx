import React from "react";
import s from "./Button.module.css"


export type ButtonPropsType = {
    buttonTitle: string
    callback?: () => void
    isDisabled?: boolean
}

export const Button = (props: ButtonPropsType) => {
    return (
        <button className={s.button}
                onClick={props.callback}
                disabled={props.isDisabled}
        >{props.buttonTitle}</button>
    )
}