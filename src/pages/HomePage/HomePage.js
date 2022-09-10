import "./HomePage.scss";
import HomeCard from "../../components/HomeCard/HomeCard";

function HomePage() {
  return (
    <div>
      <h1>This is Home Page</h1>
      <HomeCard linkName={"food"}/>
      <HomeCard linkName={"recyclable"}/>
      <HomeCard linkName={"energy"}/>
      <HomeCard linkName={"communal"}/>
    </div>
  );
}

export default HomePage;
