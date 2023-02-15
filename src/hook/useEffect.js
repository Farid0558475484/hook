import React from "react";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function UseEffect() {
  const [type, setType] = useState("users");
  // const [data, setData] = useState([]);
  const [pos, setPos] = useState({
    x: 0,
    y: 0,
  });

  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/${type}`)
  //     .then((response) => response.json())
  //     .then((json) => setData(json));
  // });

  useEffect(() => {
    console.log("render");
  }, []);

  window.addEventListener("mousemove", (e) => {
    setPos({
      x: e.clientX,
      y: e.clientY,
    });
  });

  return (
    <div className="text-center">
      <h1>Ресурс: {type}</h1>
      <button className="btn btn-primary" onClick={() => setType("users")}>
        Пользователи
      </button>
      <button className="btn btn-primary" onClick={() => setType("todos")}>
        Todos
      </button>
      <button className="btn btn-primary" onClick={() => setType("posts")}>
        Посты
      </button>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <pre>{JSON.stringify(pos, null, 2)}</pre>
    </div>
  );
}

export default UseEffect;
