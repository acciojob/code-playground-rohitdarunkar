import React from "react";

function Login({ setIsAuthenticated }) {
  return (
    <div>
      <h3>Login</h3>
      <button onClick={() => setIsAuthenticated(true)}>
        Log In
      </button>
    </div>
  );
}

export default Login;