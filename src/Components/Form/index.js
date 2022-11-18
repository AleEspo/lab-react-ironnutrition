// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Divider } from 'antd';
import {useState} from "react"

// Iteration 4
function AddFoodForm(props) {

  const [form, setForm] = useState({
    name: "",
    image: "",
    calories: 0,
    servings: 0,
    totalCalories: 0,
  })

  function handelChange (e) {
    if (e.target.name === "calories" ) {
      setForm ({...form, calories: e.target.value, totalCalories: form.servings * e.target.value})
      return;
    }
    if (e.target.name === "servings" ) {
      setForm ({...form, servings: e.target.value, totalCalories: form.calories * e.target.value})
      return;
    }

    setForm((prevState) =>{
      return {...prevState, [e.target.name]: e.target.value}
    })



  }


  function handleAddFood (e) {
    e.preventDefault()

    props.addFoods  ((prevState) => [form, ...prevState])
  }

  return (
    <form onSubmit={handleAddFood}> 
      <Divider>Add Food Entry</Divider>

      <label htmlFor='input-name'>Name</label>
      <input id="input-name" type="text" name="name" key="name" value={form.name} onChange={handelChange}/>

      <label htmlFor='input-image'>Image</label>
      <input id="input-image" type="text" name="image" key="image" value={form.image} onChange={handelChange}/>

      <label htmlFor='input-calories'>Calories</label>
      <input id="input-calories" type="number" name="calories" key="calories" value={form.calories} onChange={handelChange}/>

      <label htmlFor='input-servings'>Servings</label>
      <input id="input-servings" type="number" name="servings" key="servings" value={form.servings} onChange={handelChange}/>

      <strong>Total calories:</strong> <p>{form.totalCalories}</p>

      <button type="submit"> Create </button>
    </form>
  );
}

export default AddFoodForm;
