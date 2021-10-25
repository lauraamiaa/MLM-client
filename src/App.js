import { Switch, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/dashboard/Dashboard";
import Homepage from "./components/Homepage/Homepage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/admin" component={Dashboard} />
        <Route exact path="/" component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
