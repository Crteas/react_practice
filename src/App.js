import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDo("");
    setToDos((currntArray) => [toDo, ...currntArray]);
  };

  return (
    <div>
      <h1>My To Dos : {toDos.length}</h1>
      <form>
        <input
          onChange={onChange}
          value={toDo}
          type={"text"}
          placeholder="hello"
        />
        <button onClick={onSubmit}>ADD TO DO</button>
      </form>
      <hr />
      {toDos.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </div>
  );
}

export default App;
