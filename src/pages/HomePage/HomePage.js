import "./HomePage.scss";
import HomeCard from "../../components/HomeCard/HomeCard";

function HomePage() {
  return (
    <div className="main">
      <h1 className="main-title">Where did you earn points this week?</h1>
      <HomeCard linkName={"food"} />
      <HomeCard linkName={"recyclable"} />
      <HomeCard linkName={"energy"} />
      <HomeCard linkName={"communal"} />
    </div>
  );
}

export default HomePage;
