import React from "react";
import { connect } from "react-redux";
import { addFavourite, removeFromFavourites, setRating } from "../actions";
import Rating from "./Rating"; // Ensure correct path to Rating component

class MovieCard extends React.Component {
  handleFavouriteClick = () => {
    const { movie } = this.props;
    this.props.dispatch(addFavourite(movie));
  };

  handleUnFavouriteClick = () => {
    const { movie } = this.props;
    this.props.dispatch(removeFromFavourites(movie));
  };

  handleRate = (rating) => {
    const { movie } = this.props;
    this.props.dispatch(setRating(movie.id, rating)); // Assuming movie.id is unique
  };

  render() {
    const { movie, isFavourite } = this.props;
    return (
      <div className="movie-card">
        <div className="left">
          <img alt="movie-poster" src={movie.Poster} />
        </div>
        <div className="right">
          <div className="title">
            {movie.Title} {movie.Year}
          </div>
          <div className="plot">{movie.Plot}</div>
          <div className="footer">
            <div className="rating">{movie.rating}</div>
            <Rating
              starsSelected={movie.rating}
              totalStars={5}
              onRate={this.handleRate}
            />
            {isFavourite ? (
              <button
                className="unfavourite-btn"
                onClick={this.handleUnFavouriteClick}
              >
                Unfavourite
              </button>
            ) : (
              <button
                className="favourite-btn"
                onClick={this.handleFavouriteClick}
              >
                Favourite
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(MovieCard);
