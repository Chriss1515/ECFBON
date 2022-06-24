import { useState } from "react";
import List from "./List";
const ListContainer = () => {
  const [listValue, setListValue] = useState("");
  const [Lists, setList] = useState([]);
  const data = { id: Math.floor(Math.random() * 1000), title: listValue };

  const AddNewList = () => {
    setList((prevState) => [...prevState, data]);
    setListValue("");
  };

  const HandleValueList = (e) => {
    setListValue(e.target.value);
  };
  return (
    <div>
      <div style={{ padding: "50px" }}>
        <input type="text" value={listValue} onChange={HandleValueList} />{" "}
        <button onClick={AddNewList}>Add New List</button>
        <br />
      </div>
      {Lists.map((list) => (
        <div style={{ border: "1px dotted black" }} key={list.id}>
          <h2>{list.title}</h2>
          <List />
        </div>
      ))}
    </div>
  );
};
export default ListContainer;
