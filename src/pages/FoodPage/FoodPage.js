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
            <label htmlFor="localFarmersMarket" />
            Bought from farmer's market?
          </div>
          <div className="food-category__form--boxes">
            <input
              type="checkbox"
              id="localPlantGarden"
              name="local"
              value="1"
            />
            <label htmlFor="localPlantGarden">Plant own produce?</label>
          </div>
          <div className="food-category__form--boxes">
            <input type="checkbox" id="localjoinCoop" name="local" value="1" />
            <label htmlFor="localPlantGarden">Join a Co-op?</label>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </Category>
    </div>
  );
}

export default FoodPage;
