import './App.css';
import { FoodList } from './Components/FoodList';
import foodArr from './foods.json';
import {FoodBox} from './Components/FoodBox';
import {Row} from "antd"
import { useState } from 'react';
import Form from "./Components/Form"
import {Search} from "./Components/Search"

function App() {

  const [foods, setFoods] = useState (foodArr)
  const [filteredFood, setFilteredFood] = useState(foods)

  return (
    <div className="App">

      <Form addFoods={setFoods} />

      
      <Row style={{ width: '100%', justifyContent: 'center' }}>
      <Search filteredFunction={setFilteredFood} allFoods={foods}/>
        {filteredFood.map((currentElement) => {
            return <FoodBox 
              name = {currentElement.name}
              calories = {currentElement.calories}
              image = {currentElement.image}
              servings = {currentElement.servings}
              key = {currentElement.name}
              deleteFunc={setFoods}
              attRenderFunc={setFilteredFood}
              allFoods={foods}
            />
          }
        )}
      </Row>
    </div>
  );
}

export default App;
