import "./FoodPage.scss";

function FoodPage(props) {
  return (
    <div className="food">
      <div className="food-title">
        <h1>This is Food Page</h1>
      </div>
      <div className="food-category">
        <div className="food-category__subcategory">
          <h2>Eating Local</h2>
        </div>

        <form className="food-category__form">
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
            <input
              type="checkbox"
              id="localjoinCoop"
              name="local"
              value="1"
            />
            <label htmlFor="localPlantGarden">Join a Co-op?</label>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FoodPage;
