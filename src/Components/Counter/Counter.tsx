import React from "react";
import s from "./Counter.module.css"

import {Button} from "./Buttons/Button";
import { NavLink } from "react-router-dom";


export type CounterType = {
    value: number
    increaseValue: () => void
    resetValue: () => void
    isIncButtonDisabled: boolean
    isResetButtonDisabled: boolean
    maxValue: number
}



export const Counter = (props: CounterType) => {

    let isIncDisabledValue = props.isIncButtonDisabled
    let valueStyle;
    if (props.value === props.maxValue) {
        isIncDisabledValue = !props.isIncButtonDisabled
        valueStyle = s.maxValue
    }

    let isResetDisabledValue = props.isResetButtonDisabled
    if (props.value === 0) {
        isResetDisabledValue = !props.isResetButtonDisabled
    }


    return (
        <div className={s.counterWrapper}>
            <div className={s.counterScreen}>
                <span className={valueStyle}>{props.value}</span>
            </div>
            <div className={s.buttonArea}>
                <Button buttonTitle={"inc"}
                        callback={props.increaseValue}
                        isDisabled={isIncDisabledValue}
                />
                <Button buttonTitle={"reset"}
                        callback={props.resetValue}
                        isDisabled={isResetDisabledValue}

                />
                <NavLink to={"/settings"}>
                    <Button buttonTitle={"set"}/>
                </NavLink>
            </div>

        </div>
    )
}

