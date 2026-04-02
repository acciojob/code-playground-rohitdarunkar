import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";
import Login from "./Login";
import Playground from "./Playground";
import PrivateRoute from "./PrivateRoute";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div className="main-container">

        <h3>
          {isAuthenticated
            ? "Logged in, Now you can enter Playground"
            : "You are not logged in"}
        </h3>

        <ul>
          <li><Link to="/playground">PlayGround</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>

        <Switch>
          <Route
            path="/login"
            render={() => (
              <Login setIsAuthenticated={setIsAuthenticated} />
            )}
          />

          <PrivateRoute
            path="/playground"
            isAuthenticated={isAuthenticated}
            component={Playground}
            setIsAuthenticated={setIsAuthenticated}
          />
        </Switch>

      </div>
    </Router>
  );
}

export default App;