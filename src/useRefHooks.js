import {useState, useEffect, useRef} from "react";


export function RefHook(){
    const [inputValue, setInputValue] = useState("");
    const count = useRef(0);

    useEffect(() => {
        count.current = count.current + 1
    })

    return(
        <>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <h1>
                Render Count: {count.current}
            </h1>
        </>
    )
}

export function InputFocus() {
    const inputElement = useRef();

    const focusInput = () => {
        inputElement.current.focus()
    }

    return(
        <>
            <input
                type="text"
                ref={inputElement}
            />
            <button onClick={focusInput}>Focus Input</button>
        </>
    )
}

export function KeepTrack() {
    const [inputValue, setInputValue] = useState("");
    const prevInputValue = useRef("");

    useEffect(() => {
        prevInputValue.current = inputValue;
    }, [inputValue]);

    return(
        <>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <h2>Current Value: {inputValue}</h2>
            <h2>Previous Value: {prevInputValue.current}</h2>
        </>
    )
}