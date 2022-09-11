import "./HomePage.scss";
import HomeCard from "../../components/HomeCard/HomeCard";

function HomePage() {
  return (
    <div className="home">
      <div className="home__container">
        <h1 className="home__container--title">
          Hi Sustainer, ready to earn your points for this week?
        </h1>
      </div>
      <div className="home__grid">
        <HomeCard linkName={"food"} />
        <HomeCard linkName={"recyclable"} />
        <HomeCard linkName={"energy"} />
        <HomeCard linkName={"communal"} />
      </div>
    </div>
  );
}

export default HomePage;
