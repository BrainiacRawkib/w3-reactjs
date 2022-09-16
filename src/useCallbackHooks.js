import {useState, useCallback} from "react";
import Todos2 from "./Todos2";


const CallbackApp = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([])



    const increment = () => {
        setCount((c) => c + 1)
    };

    const addTodo = useCallback(() => {
        setTodos((t) => [...t, 'New Todos 2'])
    }, [todos])

    return (
        <>
            <Todos2 todos={todos} addTodo={addTodo} />
            <hr/>
            <div>
                Count: {count}
                <button onClick={increment}>+</button>
            </div>
        </>
    )
}

export default CallbackApp;