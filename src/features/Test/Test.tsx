import { useEffect, useState } from "react";
import "./Test.css";

export default function Shop() {
  const [array, setArray] = useState([
    { key: 1, item: "t shirt", isFavourie: false },
    { key: 2, item: "scarf", isFavourie: false },
  ]);

  function fav(item) {
    setArray((prev) =>
      prev.map((todo) => {
        if (todo.key === item.key) {
          return { ...todo, isFavourie: !todo.isFavourie };
        } else {
          return todo;
        }
      })
    );
  }

  console.log(array);

  return (
    <div>
      <div className="test">
        <h1>todo list</h1>

        {array.map((item) => {
          return (
            <div key={item.key}>
              <p>{item.item}</p>
              <button onClick={() => fav(item)}>favourite</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
