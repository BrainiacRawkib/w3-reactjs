import {useState} from "react";


function HookCar(props) {
    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "2002",
        color: "Red"
    })

    const updateColor = () => {
        setCar(previousState => {
            return {...previousState, color: 'blue'}
        })
    }

    return (
        <>
            <h1>{props.car_type}</h1>
            <h3>{car.brand}</h3>
            <p>
                It is a {car.color} {car.model} from {car.year}
            </p>
            <button type="button" onClick={updateColor}>
                Update color
            </button>
        </>
    )
}

export {HookCar};