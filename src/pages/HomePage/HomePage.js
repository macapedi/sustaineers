import "./HomePage.scss";
import HomeCard from "../../components/HomeCard/HomeCard";

function HomePage() {
  return (
    <div className="main">
      <HomeCard linkName={"food"}/>
      <HomeCard linkName={"recyclable"}/>
      <HomeCard linkName={"energy"}/>
      <HomeCard linkName={"communal"}/>
    </div>
  );
}

export default HomePage;
