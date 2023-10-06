import "./App.css";
import { useState } from "react";
import Input from "./Components/Input";

function App() {
  const initialValues = {
    title: "",
    description: "",
    ratings: 0,
    url: "",
  };
  const [] = useState(initialValues);
  return (
    <div className="App">
      <main className="App-header">
        <h1>Movie Card Form</h1>
            <form>             
              <Input
                name="title"
                type="text"
                id="title"
                label="Enter Movie Name"
                placeholder="movie Name"
                // onChange = {(e) => setFieldValue('title', e.target.value)}
                // onBlur = {()=> (...touched, "title":true)}
              />

              <Input
                type="number"
                name="ratings"
                id="ratings"
                placeholder="rate the movie"
              />

              <Input
                type="text"
                name="description"
                placeholder="write about movie"
                id="description"
              />

              <button type="submit" >Submit</button>
            </form>
      </main>
    </div>
  );
}

export default App;