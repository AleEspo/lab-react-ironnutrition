import foods from "../../foods.json"
import { useState } from "react"
import style from "./style.module.css"

export function FoodList (props){
  // TRY THIS ??? -> NO! PASSA BOX DENTRO DO LIST
  // const foodList = props
  // foodList.maps((single) => {
  //   const [food, setFood] = useState(single)
  //   return (
  //     <div className={style.foodList}>
  //       <p>{single.name}</p>
  //       <img src={single.image} width={50} ket={single.name} alt="food image"/>
  //     </div>
  //      )
  // })
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
  // return(
  // <>
  //   <h1>Food List</h1>
  //   <div>
  //     food.map((single )=> {
  //       return (
  //       <div>
  //         <p>{single.name}</p>
  //         <img src={single.image} width={50} ket={single.name} alt="food image"/>
  //       </div>
  //       )
  //     })
  //   </div>
  // </>
  // )
    // return (
    //     <div>
    //         {food.map((single) => 
    //         <p>{single.name}</p>
    //         <img src={single.image} width={50} ket={single.name}/>)
    //         }
    //   </div>
    // )
}