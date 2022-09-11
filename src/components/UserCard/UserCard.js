import React from "react";
import "./UserCard.scss";
import { Link } from "react-router-dom";
import { AiTwotoneStar } from "react-icons/ai";
import user1 from "../../assets/users/user1.jpg"
import user2 from "../../assets/users/user2.jpg"
import user3 from "../../assets/users/user3.jpg"
import user4 from "../../assets/users/user4.jpg"


class UserCard extends React.Component {






    render() {
        let source;
        let altText;
        let name;
        let bio;
        let points;
        let color;

        if (this.props.linkName === "user1") {
            source = user1;
            altText = "a girl waring a shirt";
            name = "Aline Marie";
            bio = "I love to recycle and I believe we can make a positive impact. I am 28 years old and want a clean enviroment for my kids.";
            points = 1500;
            color = "gold"
        } else if (this.props.linkName === "user2") {
            source = user2;
            altText = "a man with a red shirt";
            name = "Jake Rodriguez";
            bio = "Like State Farm Jake, I want to be a good neighbor and reduce my footprint in the enviroment";
            points = 2500;
            color = "gold"
        } else if (this.props.linkName === "user3") {
            source = user3;
            altText = "a girl smiling";
            name = "Beth Smith";
            bio = "Computer Science student at FIU, vegan and passionate about enviromental care, one step at the time";
            points = 1000;
            color = "brown"
        } else if (this.props.linkName === "user4") {
            source = user4;
            altText = "a young man sitting";
            name = "Ronald Campbell";
            bio = "Learning everyday, wanting to make a change, start for myself";
            points = 500;
            color = "blue"
        }

        return (
            <div className="user">
                <Link to={`/profiles/${this.props.linkName}`}className="user-card"

                    style={{ textDecoration: "none", color: "white" }}
                >

                    <div className="user-card__img-container">
                        <img
                            className="user-card__img-container--image"
                            src={source}
                            alt={altText}
                        />
                    </div>
                    <div className="user-card__info">
                        <h2 className="user-card__info--title">{name}</h2>
                        <p className="user-card__info--bio">{bio}</p>
                        <div className="user-card__info--points">
                            <AiTwotoneStar className=".star-logo" color={color} height="3rem" width="3rem" />
                            <p className="user-card__info--bio">{points}</p>
                        </div>
                    </div>
                </Link>
            </div>
        );
    }
}

export default UserCard;
