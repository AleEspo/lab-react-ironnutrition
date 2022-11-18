import { Card, Col, Button } from 'antd';
import foods from "../../foods.json"
import { useState } from "react"
import style from "./style.module.css"


export function FoodBox(props) {
  const {name, calories, image, servings, deleteFunc, attRenderFunc, allFoods} = props;

  function handleDelete(){
    deleteFunc((prevState)=> {
      return prevState.filter((currentElement)=>{
        return currentElement.name !== name;
      })
    })

    attRenderFunc(allFoods)
  }

  return (
    <Col>
      <Card
        title={name}
        key={name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={image} height={60} alt={name} />
        <p>Calories: {calories}</p>
        <p>Servings: {servings}</p>
        <p>
          <b>Total Calories: {calories * servings} </b> kcal
        </p>
        <Button type="primary" onClick={handleDelete}> Delete </Button>
      </Card>
    </Col>
  );
}

// export function FoodBox (props){

//   const [food, setFood] = useState(foods)
//   // let totalCalories = {props.food.calories}*{props.food.servings}
//     return (
//       <>
//         <div>
//           <h2>{props.food.name}</h2>
//           <img src={props.food.image} alt="#" key={props.name}  width={50} />
//           <p>Calories: {props.food.calories}</p>
//           <p>Servings: {props.food.servings}</p>
//           <p>
//           <b>Total Calories: </b></p> <span>{props.food.calories*props.food.servings}</span> <p><b> kcal </b>
//         </p>
//         </div>
//       </>
//     )
// }




// import style from "./style.module.css"
// import foods from "../../foods.json"
// import { useState } from "react"

// export function FoodBox (props){
//     const [food, setFood] = useState (props)
//     return(
//         <>
//             {/* <Col>
//                 <Card
//                     title={props.food.name}
//                     style={{ width: 230, height: 300, margin: 10 }}
//                 >
//                     <img src={props.food.image} height={60} alt="food" />
//                     <p>Calories: {props.food.calories}</p>
//                     <p>Servings: {props.food.servings}</p>
//                     <p>
//                     <b>Total Calories: {props.food.calories} * {props.food.servings} </b> kcal
//                     </p>
//                     <Button type="primary"> Delete </Button>
//                 </Card>
//             </Col> */}



//             <div>
//                 <h2>{props.food.name}</h2>
//                 <img src={props.food.image} alt="#" key={props.name}  width={50} />
//                 <p>Calories: {props.food.calories}</p>
//                 <p>Servings: {props.food.servings}</p>
//             </div>
//         </>
//     )
// }