import { useState } from "react";

const List = ({ id, setList, Lists }) => {
  const [valueTodo, setValueTodo] = useState("");
  const [TacheTitre, setTacheTitre] = useState("");
  const [todos, setTodos] = useState([]);

  const data1 = {
    id: todos.length + 1,
    title: valueTodo,
    tache: TacheTitre
  };

  const HandleChangeValue = (e) => {
    setValueTodo(e.target.value);
  };

  const ChangeTitreTache = (e) => {
    setTacheTitre(e.target.value);
  };

  const Deletelist = () => {
    setList(Lists.filter((list) => list.id !== id));
  };

  const AddTodo = () => {
    setTodos((prevState) => [...prevState, data1]);
    setValueTodo("");
  };
  return (
    <div style={{ padding: "10px" }}>
      <input
        type="text"
        value={data1.tache}
        placeholder="Titre"
        onChange={ChangeTitreTache}
      />
      <input
        type="text"
        value={valueTodo}
        placeholder="Create new To-do"
        onChange={HandleChangeValue}
      />

      <button onClick={AddTodo}>Add New To-do</button>
      <button onClick={Deletelist}>Delete List</button>
      <h2>{data1.tache}</h2>
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
