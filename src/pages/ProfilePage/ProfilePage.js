import "./ProfilePage.scss";
import React from "react";
import userData from "../../data/users.json";
import user1 from "../../assets/users/user1.jpg";
import user2 from "../../assets/users/user2.jpg";
import user3 from "../../assets/users/user3.jpg";
import user4 from "../../assets/users/user4.jpg";

class ProfilePage extends React.Component {



    render() {


        const currentUser = this.props.routerProps.match.params.id;
        const userMatch = userData.find(user => user.user === currentUser);


        if (userMatch) {
            return (
                <div className="profile">
                    <h1 className="profile__title">{userMatch.name}'s achievements</h1>
                    <p className="profile__bio">Bio: {userMatch.bio}</p>
                    <div className="profile__image-container">

                        {userMatch.user === "user1" && <img src={user1} className="profile__image"></img>}
                        {userMatch.user === "user2" && <img src={user2} className="profile__image"></img>}
                        {userMatch.user === "user3" && <img src={user3} className="profile__image"></img>}
                        {userMatch.user === "user4" && <img src={user4} className="profile__image"></img>}
                        <div className="profile__results-container">
                            <p className="profile__subtitle">Total points per category: {userMatch.points}</p>

                            <div className="profile__points-container">
                                <p>Food Sustainability</p>
                                <p className="profile__progress-bar">..............................</p>
                                <p>{userMatch.foodSustainability}</p>
                            </div>
                            <div className="profile__points-container">
                                <p className="profile__category">Recyclables&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                                <p className="profile__progress-bar">..............................</p>
                                <p className="profile__category-points">{userMatch.recyclables}</p>
                            </div>
                            <div className="profile__points-container">
                                <p>Energy Resources</p>
                                <p className="profile__progress-bar">..............................</p>
                                <p>{userMatch.energyResources}</p>
                            </div>
                            <div className="profile__points-container">
                                <p>Communal Impact</p>
                                <p className="profile__progress-bar">..............................</p>
                                <p>{userMatch.communalImpact}</p>
                            </div>
                        </div>
                    </div>

                </div>
            )
        } else {
            console.log("not user found")
        }
    }
}

export default ProfilePage;
