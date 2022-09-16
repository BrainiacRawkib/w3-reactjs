import {useState} from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blog from "./pages/Blogs";
import Contact from "./pages/Contact";
import Error404 from "./pages/NoPage";
import Todos from "./Todos";
import Car from "./Car";
import {HookCar} from "./useStateHooks";
import {Counter, Timer} from "./useEffectHooks";
import {Component1} from "./useContextHooks2";
import {InputFocus, KeepTrack, RefHook} from "./useRefHooks";
import ReducerTodos from "./useReducerHooks";
import CallbackApp from "./useCallbackHooks";
import MemoApp from "./useMemoHooks";
import CustomHome from "./customHook";


export default function App () {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState(['todo 1', 'todo 2']);

    const increment = () => {
        setCount((c) => c + 1);
    }

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="blogs" element={<Blog />} />
                        <Route path="contact" element={<Contact />} />
                        <Route path="*" element={<Error404 />} />
                    </Route>
                </Routes>
            </BrowserRouter>
            <br/>
            <br/>
            <Todos todos={todos} />
            <hr/>
            <div>
                Count: {count}
                <button onClick={increment}>+</button>
            </div>
            <br/><br/>
            <Car />
            <br/><br/>
            <HookCar car_type="Hook Car" />
            <br/><br/>
            <Timer />
            <br/><br/>
            <Counter />
            <br/><br/>
            <Component1 />
            <br/><br/>
            <RefHook />
            <br/><br/>
            <InputFocus />
            <br/><br/>
            <KeepTrack />
            <br/><br/>
            <ReducerTodos />
            <br/><br/>
            <CallbackApp />
            <br/><br/>
            <MemoApp />
            <br/><br/>
            <CustomHome />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />);