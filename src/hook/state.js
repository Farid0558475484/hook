import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function State() {
  const [counter, setCounter] = useState(0);

  const [state, setState] = useState({
    title: "Счетчик",
    date: Date.now(),
    counter: counter,
  });

  function increment() {
    // setCounter(counter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  }

  function decrement() {
    setCounter(counter - 1);
  }

  function updateTitle() {
    setState((prev) => {
      return {
        ...prev,
        title: "Новое название",
        counter: counter,
      };
    });
  }

  return (
    <div className="text-center">
      <h1>Счетчик: {counter}</h1>
      <button onClick={increment}>Добавить</button>{" "}
      <button onClick={decrement}>Убрать</button>{" "}
      <button onClick={updateTitle}>Обнулить</button>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}

export default State;
