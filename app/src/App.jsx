import { useState } from "react";
import MyList from "./Components/MyList";
import AddForm from "./Components/AddForm";
import "./App.css";

const App = () => {
  const [value, setValue] = useState([
    {
      id: 1,
      value: "choco",
    },
    {
      id: 2,
      value: "iceCream",
    },
  ]);

  return (
    <>
      <h1>Likes App</h1>
      <AddForm />

      <MyList />
    </>
  );
};

export default App;
