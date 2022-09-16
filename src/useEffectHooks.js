import {useState, useEffect} from "react";


function Timer() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let timer = setTimeout(() => {
            setCount((() => count + 1))
        }, 1000);
        return () => clearTimeout(timer)  // for cleanup
    }, [])

    return <h1>Renders {count} times!</h1>
}

function Counter() {
    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);

    useEffect(() => {
        setCalculation(() => count * 2)
    }, [count])

    return (
        <>
            <p>Count: {count}</p>
            <button type="button" onClick={() => setCount((c) => c + 1)}>
                +
            </button>
            <p>Calculation: {calculation}</p>
        </>
    )
}

export {Counter, Timer};