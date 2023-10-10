import { useState } from "react";
import "./App.css";

const App = () => {
  const navigation = ["addMovie", "home"];
  const myImdb = {
    id: "1",
    title: "My IMDB",
    navigation: ["addMovie", "home"],
    currentPage: "home",
    home: [
      {
        id: "1",
        name: "Narnia",
        year: "2005",
        image:
          "https://m.media-amazon.com/images/M/MV5BMTc0NTUwMT…l5BanBnXkFtZTcwNjAwNzQzMw@@._V1_FMjpg_UY2048_.jpg",
        rating: "countStar",
      },
      {
        id: "2",
        name: "Evil dead",
        year: "2000",
        image:
          "https://m.media-amazon.com/images/M/MV5BMTc0NTUwMT…l5BanBnXkFtZTcwNjAwNzQzMw@@._V1_FMjpg_UY2048_.jpg",
        rating: "countStar",
      },
    ],
  };

  const Home = () => {
    return (
      <>
        <Navigation />
      </>
    );
  };
  const [imdb, setimbd] = useState(myImdb);
  return (
    <>
      <h1>{imdb.title}</h1>
      <div>
        <nav>
          <ul>
            <li onClick={() => navigateTo("home")}>Home</li>
          </ul>
        </nav>
        {currentPage === "home" && <Home />}
      </div>
    </>
  );
};

export default App;
