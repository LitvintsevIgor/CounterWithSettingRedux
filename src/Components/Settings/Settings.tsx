import React, {ChangeEvent} from "react";
import s from "./../Settings/Settings.module.css"
import {Button} from "../Counter/Buttons/Button";
import {NavLink} from "react-router-dom";

export type CounterType = {
    value: number
    increaseValue: () => void
    resetValue: () => void
    setStartValue: (startValue: number) => void
    setMaxValue: (maxValue: number) => void
    startValue: number
    maxValue: number
}

export const Settings = (props: CounterType) => {

    let changeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.setStartValue(parseInt(e.currentTarget.value))
    }
    let changeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMaxValue(parseInt(e.currentTarget.value))
    }

    let inputStyle;
    let disabled = false;
    if (props.startValue < 0 || props.maxValue < 0 || props.maxValue <= props.startValue) {
        inputStyle = s.inputError
        disabled = !disabled
    }



    return (
        <div className={s.counterWrapper}>
            <div className={s.counterScreen}>
                <div className={s.inputWithLabel}>
                    <div>max value:</div>
                    <input type="number"
                           onChange={changeMaxValue}
                           value={props.maxValue}
                           className={inputStyle}
                    />
                </div>
                <div className={s.inputWithLabel}>
                    <div>start value:</div>
                    <input type="number"
                           onChange={changeStartValue}
                           value={props.startValue}
                           className={inputStyle}
                    />
                </div>
            </div>
            <div className={s.buttonArea}>
                <NavLink to={"/counter"}>
                    <Button buttonTitle={"set"} isDisabled={disabled}/>
                </NavLink>
            </div>

        </div>
    )
}

