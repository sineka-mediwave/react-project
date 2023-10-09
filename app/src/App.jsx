import { useEffect, useState } from "react";
import MyList from "./Components/MyList";
import AddForm from "./Components/AddForm";
import "./App.css";

function setToLocalStorage(value) {
  localStorage.setItem("My-favourites", JSON.stringify(value));
}

function getFromLocalStorage() {
  return JSON.parse(localStorage.getItem("My-favourites")) || [];
}

const App = () => {
  const [value, setValue] = useState([]);
  const [update, setUpdate] = useState({});

  useEffect(() => setValue(getFromLocalStorage()), []);

  function handleAdd(payload) {
    const newValue = [...value, payload];
    setValue(newValue);
    setToLocalStorage(newValue);
  }

  function handleFilter(newArray) {
    setValue(newArray);
    setToLocalStorage(newArray);
  }

  function isEditUpdate(obj) {
    console.log(obj);
    setUpdate((obj.edit = true));
  }

  function updateChange(objId) {
    const index = value.findIndex((item) => item.id == objId);
    const editForm = listItem[index];
  }
  return (
    <>
      <h1>Likes App</h1>
      <AddForm handleAdd={handleAdd} />
      <MyList
        listItem={value}
        updateChange={updateChange}
        isEditUpdate={isEditUpdate}
        handleFilter={handleFilter}
      />
    </>
  );
};

export default App;
