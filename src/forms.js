import {useState} from "react";


function Form(props) {
    const [name, setName] = useState("");

    return (
        <form>
            <label>
                <input
                    type="text"
                    value={name}
                    placeholder={props.placeholder}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
        </form>
    )
}

const SubmitForm = (props) => {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
      event.preventDefault();
      if (name)
          alert(`The name you entered was: ${name}!`)
      else
          alert('Enter a name!')
  }

  return(
      <form onSubmit={handleSubmit}>
          <legend>{props.form_type}</legend>
          <label>
              <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
              />
          </label>
          <input type="submit"/>
      </form>
  )
}

function MultipleForms(props) {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setInputs(values => ({...values, [name]: value}))
    }
    const handleSubmit = event => {
        event.preventDefault();
        console.log(inputs);
    }

    return(
        <form onSubmit={handleSubmit}>
            <legend>{props.form_type}</legend>
            <label>
                <input
                    type="text"
                    name="username"
                    value={inputs.username || ""}
                    onChange={handleChange}
                />
            </label>
            <br/>
            <label>
                <input
                    type="number"
                    name="age"
                    value={inputs.age || ""}
                    onChange={handleChange}
                />
            </label>
            <br/>
            <button type="submit">Submit</button>
        </form>
    )
}

const Textarea = (props) => {
    const [textarea, setTextarea] = useState('The default text area!');

    const handleChange = (event) => {
        setTextarea(event.target.value);
    }

    return(
        <form>
            <legend>{props.form_type}</legend>
            <textarea value={textarea} onChange={handleChange} />
        </form>
    )
}

const Select = props => {
    const [myCar, setMyCar] = useState('Volvo');

    const handleChange = (event) => {
        setMyCar(event.target.value);
    }

    const cars = ['Lambo', 'Lexus', 'Benz', 'Audi', 'Fiat', 'Honda']

    return (
        <form>
            {props.form_type}
            <select value={myCar} onChange={handleChange}>
                <option value="Ford">Ford</option>
                <option value="Volvo">Volvo</option>
                <option value="Fiat">Fiat</option>
                <option value="Ferrari">Ferrari</option>
            </select>
            <div>
                {cars.length > 0 && <select value={cars[cars.length - 1]}>
                    {cars.map((car) => <option value={car}>{car}</option>)}
                </select>}
            </div>
        </form>
    )
}

export {Form, SubmitForm, MultipleForms, Textarea, Select};