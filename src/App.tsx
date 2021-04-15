import React from 'react';
import './App.css';
import {Counter} from "./Components/Counter/Counter";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";
import {increaseValueAC, InitialStateType, resetValueAC, setMaxValueAC, setStartValueAC} from "./state/counter-reducer";
import {Settings} from "./Components/Settings/Settings";
import {Route} from 'react-router-dom';


function App() {

    let counter = useSelector<AppRootStateType, InitialStateType>(state => state.counter)

    let dispatch = useDispatch();

    let increaseValue = () => {
        let action = increaseValueAC();
        dispatch(action)
    }

    let resetValue = () => {
        let action = resetValueAC();
        dispatch(action)
    }

    let setStartValue = (startValue: number) => {
        let action = setStartValueAC(startValue)
        dispatch(action)
    }

    let setMaxValue = (maxValue: number) => {
        let action = setMaxValueAC(maxValue)
        dispatch(action)
    }
    //
    // let isIncDisabledValue = counter.isIncButtonDisabled
    // if (counter.value === counter.maxValue) {
    //     isIncDisabledValue = !counter.isIncButtonDisabled
    // }
    //
    // let isResetDisabledValue = counter.isResetButtonDisabled
    // if (counter.value === 0) {
    //     isResetDisabledValue = !counter.isResetButtonDisabled
    // }



    return (
        <div className="App">
            <Route path={"/counter"} render={() => <Counter value={counter.value}
                                                            increaseValue={increaseValue}
                                                            resetValue={resetValue}
                                                            isIncButtonDisabled={counter.isIncButtonDisabled}
                                                            isResetButtonDisabled={counter.isResetButtonDisabled}
                                                            maxValue={counter.maxValue}
            />}/>

            <Route path={"/settings"} render={() => <Settings value={counter.value}
                                                              increaseValue={increaseValue}
                                                              resetValue={resetValue}
                                                              setStartValue={setStartValue}
                                                              setMaxValue={setMaxValue}
                                                              startValue={counter.startValue}
                                                              maxValue={counter.maxValue}

                                                              // disabledValue={disabledValue}
            />}/>
        </div>
    )
}

export default App;
