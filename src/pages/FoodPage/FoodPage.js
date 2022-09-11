import "./FoodPage.scss";

function FoodPage(props) {
  return (
    <div className="food">
      <div className="food-title">
        <h1>This is Food Page</h1>
      </div>
      <div className="food-category">
        <h2>Eating Local</h2>
        <form>
          <div>
            <input type="checkbox" id="localFarmersMarket" name="local" value="1" />
            <label htmlFor="localFarmersMarket">Bought from farmer's market?</label>
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
