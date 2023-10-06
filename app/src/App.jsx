import "./App.css";
import { useState } from "react";
import {Input, Card} from "./Components";
import * as Yup from 'yup';

function App() {
  const initialValues = {
    title: "",
    description: "",
    ratings: 0,
    url: "",
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title required'),
    description: Yup.string().required('Description required').min(5, "Description should be at least 5 characters"),
    ratings: Yup.number().required('Ratings is required').max(10, "Rating cannot be greater than 10"),
    url: Yup.string().url('Enter a valid URL').required('URL is required'),
  });
  const [state, setState] = useState(initialValues);
  const [movies, setMovies] = useState([]);
  
  // const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state) 
    setMovies([...movies, state]);
    console.log(movies)
    setState(movies);
    
  }

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
                onChange = {handleChange}
                // onBlur = {()=> (...touched, "title":true)}
              />

              <Input
                type="number"
                name="ratings"
                id="ratings"
                label="Enter the rating"
                placeholder="rate the movie"
                onChange = {handleChange}

              />

              <Input
                type="text"
                name="description"
                id="description"
                label= "Description for the movie"
                placeholder="write about movie"
                onChange = {handleChange}

              />
              <Input
                type="link"
                name="imageUrl"
                id="imageUrl"
                label= "Poster of the Movie"
                placeholder="paste image url"
                onChange = {handleChange}

              />
              <button type="submit" onClick={handleSubmit}>Create Card</button>
            </form>
            <div className="CardDiv">
              {movies.map((movies, index)=> 
              <Card key={index} value={movies}></Card>)}
            </div>
      </main>
    </div>
  );
}

export default App;