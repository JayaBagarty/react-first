import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(5);

  const addValu = () => {
    if (count >= 20) {
      setCount(20);
    } else {
      setCount(count + 1);
    }
  };
  const removeValu = () => {
    if (count <= 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  };

  return (
    <>
      <h1>Vite + React</h1>
      <h2>Counter: {count}</h2>
      <button onClick={addValu}>Add value</button>
      <br />
      <button onClick={removeValu}>Remove value</button>
    </>
  );
}

export default App;
