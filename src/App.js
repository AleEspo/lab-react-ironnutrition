import './App.css';
import { FoodList } from './Components/FoodList';
import foods from './foods.json';
import { FoodBox } from './Components/FoodBox';

function App() {
  return (
    <div className="App">
      <FoodList />
    </div>
  );
}

export default App;
