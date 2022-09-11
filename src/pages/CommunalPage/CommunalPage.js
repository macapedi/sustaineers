import "./CommunalPage.scss";
import Category from "../../components/CategoryCard/Category";

function CommunalPage(props) {
  const onChangeHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="communal">
      <div className="communal-title">
        <h1>This is Community Page</h1>
      </div>

      <Category>
        <div className="communal-category__subcategory">
          <h2>Volunteer</h2>
        </div>

        <form className="communal-category__form" onChange={onChangeHandler}>
          <div className="communal-category__form--boxes">
            <input
              type="checkbox"
              id="volunteerCleanUps"
              name="community"
              value="100"
            />
            <label htmlFor="localFarmersMarket" />
            Cleaned up local parks
          </div>
          <div className="communal-category__form--boxes">
            <input
              type="checkbox"
              id="volunteerPlantTrees"
              name="volunteer"
              value="100"
            />
            <label htmlFor="localPlantGarden">Planted new trees</label>
          </div>
          <div className="communal-category__form--boxes">
            <input type="checkbox" id="volunteerCommunityCompost" name="community" value="100" />
            <label htmlFor="localPlantGarden">Added to community compost</label>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </Category>

      <Category>
        <div className="communal-category__subcategory">
          <h2>Transportation</h2>
        </div>

        <form className="communal-category__form" onChange={onChangeHandler}>
          <div className="communal-category__form--boxes">
            <input
              type="checkbox"
              id="transportCarpool"
              name="community"
              value="100"
            />
            <label htmlFor="transportCarPool" />
            Carpooled to work
          </div>
          <div className="communal-category__form--boxes">
            <input type="checkbox" id="transportBusTrain" name="community" value="100" />
            <label htmlFor="transportBusTrain">
              Took the bus or train
            </label>
          </div>
          <div className="communal-category__form--boxes">
            <input
              type="checkbox"
              id="transportWalked"
              name="community"
              value="100"
            />
            <label htmlFor="transportWalked">Walked to the store or restaurant</label>
          </div>
          <div className="communal-category__form--boxes">
            <input
              type="checkbox"
              id="transportBike"
              name="community"
              value="100"
            />
            <label htmlFor="tranportBike">
              Rode my bike
            </label>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </Category>
    </div>
  );
}

export default CommunalPage;
