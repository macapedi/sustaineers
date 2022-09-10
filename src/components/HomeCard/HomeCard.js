import React from "react";
import "../HomeCard/HomeCard.scss";
import { Link } from "react-router-dom";
import food from "../../assets/food.jpg";
import bulb from "../../assets/bulb.jpg";
import recycle from "../../assets/recycle.jpg";
import community from "../../assets/community.jpg";

let table = {"food" : {}}

class HomeCard extends React.Component {
  render() {
    return (
      <>
        <Link to={`/${this.props.linkName}`}>
          <div className="list">
            <div className="list__img-container">
              <img
                className="list__img-container--image"
                src={food}
                alt="food by , unsplash"
              />
            </div>
            <div className="list__info">
              <h2 className="list__info--title">{this.props.linkName}</h2>
            </div>
          </div>
        </Link>
      </>
    );
  }
}

export default HomeCard;
