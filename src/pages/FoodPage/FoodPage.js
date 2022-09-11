import "./FoodPage.scss";
import Category from "../../components/CategoryCard/Category";

function FoodPage(props) {
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="food">
      <div className="food-title">
        <h1>This is Food Page</h1>
      </div>

      <Category>
        <div className="food-category__subcategory">
          <h2>Eating Local</h2>
        </div>

        <form className="food-category__form" onSubmit={onSubmitHandler}>
          <div className="food-category__form--boxes">
            <input
              type="checkbox"
              id="localFarmersMarket"
              name="local"
              value="1"
            />
            <label
              htmlFor="localFarmersMarket"
              className="food-category__form--labels"
            >
              Bought from farmer's market?
            </label>
          </div>
          <div className="food-category__form--boxes">
            <input
              type="checkbox"
              id="localPlantGarden"
              name="local"
              value="1"
            />
            <label
              htmlFor="localPlantGarden"
              className="food-category__form--labels"
            >
              Plant own produce?
            </label>
          </div>
          <div className="food-category__form--boxes">
            <input type="checkbox" id="localjoinCoop" name="local" value="1" />
            <label
              htmlFor="localPlantGarden"
              className="food-category__form--labels"
            >
              Join a Co-op?
            </label>
          </div>

          <button type="submit" className="food-category__form--btn">
            Submit
          </button>
        </form>
      </Category>
    </div>
  );
}

export default FoodPage;
