const  Card = (movies) => {
    return(
    <div className="cardDiv">
      <h3>{movies.title}</h3>
      <p>Description: {movies.description}</p>
      <p>Ratings: {movies.ratings}</p>
      <img src={movies.imageUrl} alt="Image" />
    </div>)
}
export default Card;