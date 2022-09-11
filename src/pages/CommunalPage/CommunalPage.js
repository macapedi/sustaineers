import "./CommunalPage.scss";
import Category from "../../components/CategoryCard/Category";

function CommunalPage(props) {
  const onChangeHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="communal">
      <div className="food-title">
        <h1>Eat healthy for a wealthy mood!</h1>
      </div>

      <Category>
        <div className="communal-category__subcategory">
          <h2>Volunteer</h2>
        </div>

        <form className="communal-category__form" onSubmit={onChangeHandler}>
          <div className="communal-category__form--boxes">
            <input
              type="checkbox"
              id="volunteerCleanUps"
              name="community"
              value="100"
            />
            <label
              htmlFor="localFarmersMarket"
              className="food-category__form--labels"
            >
              Cleaned up local parks
            </label>
          </div>
          <div className="communal-category__form--boxes">
            <input
              type="checkbox"
              id="volunteerPlantTrees"
              name="volunteer"
              value="100"
            />
            <label
              htmlFor="localPlantGarden"
              className="food-category__form--labels"
            >
              Planted new trees
            </label>
          </div>
          <div className="communal-category__form--boxes">
            <input
              type="checkbox"
              id="volunteerCommunityCompost"
              name="community"
              value="100"
            />
            <label
              htmlFor="localPlantGarden"
              className="food-category__form--labels"
            >
              Added to community compost
            </label>
          </div>
          <div>
            <button type="submit" className="food-category__form--btn">
              Submit
            </button>
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
            <label
              htmlFor="transportCarPool"
              className="food-category__form--labels"
            >
              Carpooled to work
            </label>
          </div>
          <div className="communal-category__form--boxes">
            <input
              type="checkbox"
              id="transportBusTrain"
              name="community"
              value="100"
            />
            <label
              htmlFor="transportBusTrain"
              className="food-category__form--labels"
            >
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
            <label
              htmlFor="transportWalked"
              className="food-category__form--labels"
            >
              Walked to the store or restaurant
            </label>
          </div>
          <div className="communal-category__form--boxes">
            <input
              type="checkbox"
              id="transportBike"
              name="community"
              value="100"
            />
            <label
              htmlFor="tranportBike"
              className="food-category__form--labels"
            >
              Rode my bike
            </label>
          </div>
          <div>
            <button type="submit" className="food-category__form--btn">
              Submit
            </button>
          </div>
        </form>
      </Category>
    </div>
  );
}

export default CommunalPage;
