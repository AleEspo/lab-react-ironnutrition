import foods from "../../foods.json"
import { useState } from "react"

const foodList = [...foods]

export function FoodList (){

  const [food, setFood] = useState(foodList)

    //     return (
    //     <div>
    //         {food.map((single) => 
    //         <div>
    //           <p>{single.name}</p>
    //         </div>
    //         )}
    //   </div>
    // )
    return (
      <>
        <h1>Food List</h1>
        <div className="FoodList"></div>
        {food.map((single)=> {
          return (
         <div>
           <p>{single.name}</p>
           <img src={single.image} width={50} ket={single.name} alt="food image"/>
         </div>
          )
        })
        }
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