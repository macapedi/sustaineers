import "./ProfilePage.scss";
import React from "react";
import userData from "../../data/users.json";
import user1 from "../../assets/users/user1.jpg";
import user2 from "../../assets/users/user2.jpg";
import user3 from "../../assets/users/user3.jpg";
import user4 from "../../assets/users/user4.jpg";

class ProfilePage extends React.Component {

   

    render() {
      const  currentUser = this.props.routerProps.match.params.id;
      const  userMatch = userData.find(user => user.user === currentUser);
        console.log(this.props.routerProps.match.params.id);
        console.log(userMatch);
        if (userMatch) {
            return (
                <div>
                    <h1>{userMatch.name}'s achievements</h1>
                    <p></p>
                </div>
            )
        } else {
            console.log("not user found")
        }
    }
}

export default ProfilePage;
