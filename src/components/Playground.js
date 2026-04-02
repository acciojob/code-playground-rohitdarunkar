import React from "react";

function Playground({ setIsAuthenticated }) {
  return (
    <div>
      <h3>Playground</h3>
      <button onClick={() => setIsAuthenticated(false)}>
        Log Out
      </button>
    </div>
  );
}

export default Playground;