import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import State from "./hook/state";
import UseEffect from "./hook/useEffect";

function App() {
  return (
    <div className="text-center">
      <State />
      <UseEffect />
    </div>
  );
}

export default App;
