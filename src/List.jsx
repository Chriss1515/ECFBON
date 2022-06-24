import { useState } from "react";

const List = () => {
  const [valueTodo, setValueTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const data1 = { id: Math.floor(Math.random() * 1000), title: valueTodo };

  const HandleChangeValue = (e) => {
    setValueTodo(e.target.value);
  };

  const AddTodo = () => {
    setTodos((prevState) => [...prevState, data1]);
    setValueTodo("");
  };
  return (
    <div style={{ border: "1px solid red", margin: "10px" }}>
      <h2>Tache</h2>
      <input type="text" value={valueTodo} onChange={HandleChangeValue} />
      <button onClick={AddTodo}>Add New To-do</button>
      {todos.map((todo) => (
        <div key={todo.id}>
          <Todo
            value={todo.title}
            setTodos={setTodos}
            todos={todos}
            id={todo.id}
          />
        </div>
      ))}
    </div>
  );
};

const Todo = ({ value, setTodos, todos, id }) => {
  const Delete = () => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div>
      <input type="checkbox" /> {value} <button onClick={Delete}>DELETE</button>
    </div>
  );
};
export default List;
