import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  const clear = () => {
    setResult("");
  };

  const backspace = () => {
    setResult(result.slice(0, -1));
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (err) {
      setResult("Error");
    }
  };

  return (
    <div className="container">
      <form>
        <input type="text" value={result} />
      </form>

      <div className="buttons">
        <button onClick={clear} id="clear">
          AC
        </button>
        <button onClick={backspace} id="backspace">
          Del
        </button>
        <button name="." className="calc" onClick={handleClick}>
          .
        </button>
        <button name="/" className="calc" onClick={handleClick}>
          &divide;
        </button>
        <button name="7" id="number" onClick={handleClick}>
          7
        </button>
        <button name="8" id="number" onClick={handleClick}>
          8
        </button>
        <button name="9" id="number" onClick={handleClick}>
          9
        </button>
        <button name="*" className="calc" onClick={handleClick}>
          &times;
        </button>
        <button name="4" id="number" onClick={handleClick}>
          4
        </button>
        <button name="5" id="number" onClick={handleClick}>
          5
        </button>
        <button name="6" id="number" onClick={handleClick}>
          6
        </button>
        <button name="-" className="calc" onClick={handleClick}>
          &minus;
        </button>
        <button name="1" id="number" onClick={handleClick}>
          1
        </button>
        <button name="2" id="number" onClick={handleClick}>
          2
        </button>
        <button name="3" id="number" onClick={handleClick}>
          3
        </button>
        <button name="+" className="calc" onClick={handleClick}>
          +
        </button>
        <button name="00" id="number" onClick={handleClick}>
          00
        </button>
        <button name="0" id="number" onClick={handleClick}>
          0
        </button>
        <button onClick={calculate} id="equals">
          =
        </button>
      </div>
    </div>
  );
};

export default App;
