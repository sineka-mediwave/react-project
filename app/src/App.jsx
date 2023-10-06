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
                label="Enter the rating"
                placeholder="rate the movie"
              />

              <Input
                type="text"
                name="description"
                id="description"
                label= "Description for the movie"
                placeholder="write about movie"
              />
              <Input
                type="link"
                name="imageUrl"
                id="imageUrl"
                label= "Poster of the Movie"
                placeholder="paste image url"
              />

              <button type="submit" >Submit</button>
            </form>
      </main>
    </div>
  );
}

export default App;