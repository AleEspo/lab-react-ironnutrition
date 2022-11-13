import './App.css';
import { FoodList } from './Components/FoodList';
import foods from './foods.json';
import {FoodBox} from './Components/FoodBox';

function App() {
  return (
    <div className="App">
      {/* <FoodBox food={ {
        name: "Orange",
        calories: 85,
        image: "https://i.imgur.com/abKGOcv.jpg",
        servings: 1
      }} />
      <FoodList /> */}
      {foods.map((currentElement) => {
        return <FoodBox food={
          {
          name: currentElement.name,
          calories: currentElement.calories,
          image: currentElement.image,
          servings: currentElement.servings,
          }
        }
        />
      }
      )}
    </div>
  );
}

export default App;
