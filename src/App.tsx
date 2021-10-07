import Login from "./layouts/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Homepage from "./layouts/Homepage";
import PrivateRoute from "./router/PrivateRoute";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/login' component={Login} />
        <PrivateRoute path='/'>
          <Homepage />
        </PrivateRoute>
      </Switch>
    </Router>
  );
}
