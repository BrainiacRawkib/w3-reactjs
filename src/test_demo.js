import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    Form, MultipleForms, SubmitForm, Textarea, Select
} from "./forms";


// const v = {
//     brand: 'Ford',
//     model: 'Mustang',
//     type: 'Car',
//     year: 2022,
//     color: 'red',
//     reg: {
//         city: 'Houston',
//         state: 'Texas',
//         country: 'USA'
//     }
// }
//
// const numberOne = [1, 2, 3, 4, 5];
//
// const numberTwo = [11, 22, 33, 44, 55];

//
// const func = ({type, color, reg: {city, state, country}, brand, model}) =>
//     `My ${type} is a ${color} ${brand} ${model}. Registration details: \n ${city} ${state}, ${country}`
//
// const numbs = [...numberOne, ...numberTwo]
//
// const myFirstElement = <h1>
//     Hello React! {func(v)} {numbs.join(',')} <br/>
//
// </h1>


const Car = (props) => {
    return <li>I am a {props.brand}</li>
}

const Garage = () => {
    const cars = [
        {id: 1, brand: 'Ford'},
        {id: 2, brand: 'BMW'},
        {id: 3, brand: 'Audi'},
        {id: 4, brand: 'Lexus'}
    ]
    return (
        <div>
            <h1>The Garage</h1>
            <ul>
                {cars.map((car) => <Car key={car.id} brand={car.brand} />)}
            </ul>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Select form_type='Select Form!' />);