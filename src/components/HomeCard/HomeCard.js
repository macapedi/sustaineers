import React from "react";
import "../HomeCard/HomeCard.scss";
import { Link } from "react-router-dom";
import food from "../../assets/food.jpg";
import bulb from "../../assets/bulb.jpg";
import recycle from "../../assets/recycle.jpg";
import community from "../../assets/community.jpg";

class HomeCard extends React.Component {
  render() {
    let source;
    let altText;
    let title;

    if (this.props.linkName === "food") {
      source = food;
      altText = "vegetables, by Sharon Pittaway, unsplash";
      title = "Food Sustainability";
    } else if (this.props.linkName === "recyclable") {
      source = recycle;
      altText = "trash bins, by Pawel Czerwinski, unsplash";
      title = "Recyclables";
    } else if (this.props.linkName === "energy") {
      source = bulb;
      altText = "tungsten light bulb, by Anthony Indraus, unsplash";
      title = "Energy Resources";
    } else if (this.props.linkName === "communal") {
      source = community;
      altText = "community garden, by Steve Adams, unsplash";
      title = "Communal Impact";
    }

    return (
      <div className="main">
        <Link
          to={`/${this.props.linkName}`}
          style={{ textDecoration: "none", color: "white" }}
        >
          <div className="main-card">
            <div className="main-card__img-container">
              <img
                className="main-card__img-container--image"
                src={source}
                alt={altText}
              />
            </div>
            <div className="main-card__info">
              <h2 className="main-card__info--title">{title}</h2>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default HomeCard;
