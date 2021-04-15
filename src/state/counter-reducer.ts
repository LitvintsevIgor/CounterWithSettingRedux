export const INCREASE_VALUE = "INCREASE-VALUE"
export const RESET_VALUE = "DECREASE_VALUE"
export const SET_START_VALUE = "SET_START_VALUE"
export const SET_MAX_VALUE = "SET_MAX_VALUE"

export type InitialStateType = {
    value: number
    maxValue: number
    isIncButtonDisabled: boolean
    isResetButtonDisabled: boolean
    startValue: number
}
export const InitialState: InitialStateType = {
    value: 0,
    maxValue: 5,
    isIncButtonDisabled: false,
    isResetButtonDisabled: false,
    startValue: 0
}

export type ActionType = ReturnType<typeof increaseValueAC>
    | ReturnType<typeof resetValueAC>
    | ReturnType<typeof setStartValueAC>
    | ReturnType<typeof setMaxValueAC>


export const counterReducer = (state: InitialStateType = InitialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case INCREASE_VALUE:
            return {...state, value: ++state.value}
        case RESET_VALUE:
            return {...state, value: state.startValue}
        case SET_START_VALUE:
            return {...state, startValue: action.startValue, value: action.startValue}
        case SET_MAX_VALUE:
            return {...state, maxValue: action.maxValue}
        default:
            return state
    }
}

export type IncreaseValueACType = {
    type: typeof INCREASE_VALUE
}

export const increaseValueAC = (): IncreaseValueACType => {
    return {
        type: INCREASE_VALUE
    }
}

export type ResetValueACType = {
    type: typeof RESET_VALUE
}

export const resetValueAC = (): ResetValueACType => {
    return {
        type: RESET_VALUE
    }
}

export type SetStartValueACType = {
    type: typeof SET_START_VALUE
    startValue: number
}

export const setStartValueAC = (startValue: number): SetStartValueACType => {
    return {
        type: SET_START_VALUE, startValue
    }
}

export type SetMaxValueACType = {
    type: typeof SET_MAX_VALUE
    maxValue: number
}

export const setMaxValueAC = (maxValue: number): SetMaxValueACType => {
    return {
        type: SET_MAX_VALUE, maxValue
    }
}



