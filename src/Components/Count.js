import React, { useState, useEffect } from "react";

const Count = (props) => {
    const myName = props.myName

    const [current, setCurrent] = useState(0)
    let [max, setMax] = useState('')
    const add_1 = () => {
        if (current === 15) {
            setMax(max = "Maximum!")
        }
        setCurrent(current + props.increment)
    }

    useEffect(() => {
        if (current === 15) {
            setCurrent(0)
        }
    }, [current])
    return (
        <div>
            <button onClick={add_1}>+{props.increment}</button>
            <div>{current}</div>
            <div>{max}</div>
            <div>{myName}</div>
        </div>
    )
}

export default Count