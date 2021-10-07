import Login from "./views/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./views/Homepage";
import PrivateRoute from "./router/PrivateRoute";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path='/login'>
          <Login />
        </Route>
        <PrivateRoute path='/'>
          <Homepage />
        </PrivateRoute>
      </Switch>
    </Router>
  );
}
