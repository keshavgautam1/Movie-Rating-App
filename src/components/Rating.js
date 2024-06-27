// Rating.js

import React from "react";

class Rating extends React.Component {
  renderStars = () => {
    const { starsSelected, totalStars, onRate } = this.props;
    const stars = [];
    for (let i = 1; i <= totalStars; i++) {
      stars.push(
        <span
          key={i}
          className={`star ${i <= starsSelected ? "filled" : ""}`}
          onClick={() => onRate(i)}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  render() {
    return <div className="rating">{this.renderStars()}</div>;
  }
}

export default Rating;
