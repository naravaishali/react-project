import React from "react";
import { useSelector } from "react-redux";
import counter from "./reducers/counter";
export default function CountValue(){
    const count = useSelector(state => state.counter)
    return(
        <div>
            <h1>The Value from counter is:{count}</h1>
        </div>
    )
}