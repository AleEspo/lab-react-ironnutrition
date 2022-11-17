import './App.css';
import { FoodList } from './Components/FoodList';
import foods from './foods.json';
import {FoodBox} from './Components/FoodBox';
import {Row} from "antd"

function App() {
  return (
    <div className="App">
    <Row style={{ width: '100%', justifyContent: 'center' }}>
    {foods.map((currentElement) => {
        return <FoodBox name = {currentElement.name}
          calories = {currentElement.calories}
          image = {currentElement.image}
          servings = {currentElement.servings}
        />
      }
      )}
      </Row>
    </div>
  );
}

export default App;
