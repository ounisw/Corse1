import logo from "./logo.svg";
import "./App.css";
import Wheather from "./wheather";
import FormulaireHook from "./FormulaireHook";
const wheatherToday = fetch(
  "api.openweathermap.org/data/2.5/weather?q=Algiers,dz&appid=383d93fae88042bc86d6fe1befdeb0cf"
);
function App() {
  return (
    <div className="App">
      <Wheather wheatherToday={wheatherToday} />
      <FormulaireHook />
    </div>
  );
}

export default App;
