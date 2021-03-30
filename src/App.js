import './App.css';
import DivContainer from './Components/DivContainer/DivContainer';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
      <Route path="/inventoryMDy87">
        <DivContainer />
      </Route>
      </Router>
    </div>
  );
}

export default App;
