import { Switch, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/dashboard/Dashboard";
import Homepage from "./components/Homepage/Homepage";
import LoginPage from "./pages/login/LoginPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/admin" component={Dashboard} />
        <Route exact path="/" component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
