import {memo} from "react";


const Todos2 = ({todos, addTodo}) => {
    console.log('child render!')

    return (
        <>
            <h2>Todos 2</h2>
            {todos.map((todo, index) => {
                return <p key={index}>{todo}</p>
            })}
            <button onClick={addTodo}>Add Todo</button>
        </>
    )
}

export default memo(Todos2);