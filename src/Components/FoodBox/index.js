// import { Card, Col, Button } from 'antd';
import foods from "../../foods.json"
import { useState } from "react"
import style from "./style.module.css"

export function FoodList (whatToRender){

  const [food, setFood] = useState(foods)
    return (
      <>
        <h1>Food List</h1>
        <div>
        {food.map((single)=> {
          return (
         <div className={style.foodList}>
           <p>{single.name}</p>
           <img src={single.image} width={50} ket={single.name} alt="food image"/>
         </div>
          )
        })
        }
        </div>
      </>
    )
}




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