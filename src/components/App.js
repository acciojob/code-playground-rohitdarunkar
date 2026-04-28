import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Login from "./Login";
import Playground from "./Playground";
import PrivateRoute from "./PrivateRoute";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div className="main-container">
        <Switch>
          <Route
            path="/login"
            render={() => (
              <Login setIsAuthenticated={setIsAuthenticated} />
            )}
          />

          <PrivateRoute
            exact
            path="/"
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