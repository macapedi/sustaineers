import "./FoodPage.scss";
import Category from "../../components/CategoryCard/Category";

function FoodPage(props) {
  const onChangeHandler = (e) => {
    e.preventDefault();
    console.log("here", e);
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

        <form className="food-category__form" onChange={onChangeHandler}>
          <div className="food-category__form--boxes">
            <input
              type="checkbox"
              id="localFarmersMarket"
              name="food"
              value="100"
            />
            <label htmlFor="localFarmersMarket" />
            Bought from farmer's market?
          </div>
          <div className="food-category__form--boxes">
            <input
              type="checkbox"
              id="localPlantGarden"
              name="food"
              value="100"
            />
            <label htmlFor="localPlantGarden">Plant own produce?</label>
          </div>
          <div className="food-category__form--boxes">
            <input type="checkbox" id="localjoinCoop" name="food" value="100" />
            <label htmlFor="localPlantGarden">Join a Co-op?</label>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </Category>

      <Category>
        <div className="food-category__subcategory">
          <h2>Reducing Waste</h2>
        </div>

        <form className="food-category__form" onChange={onChangeHandler}>
          <div className="food-category__form--boxes">
            <input
              type="checkbox"
              id="wasteFinishFood"
              name="food"
              value="100"
            />
            <label htmlFor="localFinishFood" />
            Finished all food on my plate
          </div>
          <div className="food-category__form--boxes">
            <input type="checkbox" id="wasteBuyLess" name="waste" value="100" />
            <label htmlFor="wasteBuyLess">
              Bought less quantity to reduce spoilage
            </label>
          </div>
          <div className="food-category__form--boxes">
            <input
              type="checkbox"
              id="wasteStoreFood"
              name="food"
              value="100"
            />
            <label htmlFor="wasteStoreFood">Stored food wisely</label>
          </div>
          <div className="food-category__form--boxes">
            <input
              type="checkbox"
              id="wasteBuyUglies"
              name="food"
              value="100"
            />
            <label htmlFor="wasteBuyUglies">
              Bought ugly fruit and vegetables
            </label>
          </div>
          <div className="food-category__form--boxes">
            <input
              type="checkbox"
              id="wasteDonateFood"
              name="food"
              value="100"
            />
            <label htmlFor="wasteDonateFood">
              Donated food that I didn't use.
            </label>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </Category>

      <Category>
        <div className="food-category__subcategory">
          <h2>Meat Choices</h2>
        </div>

        <form className="food-category__form" onChange={onChangeHandler}>
          <div className="food-category__form--boxes">
            <input type="checkbox" id="meatDontBuy" name="food" value="100" />
            <label htmlFor="meatDontBuy" />
            Skip the meat isle.
          </div>
          <div className="food-category__form--boxes">
            <input
              type="checkbox"
              id="meatSmallerAnimals"
              name="food"
              value="100"
            />
            <label htmlFor="meatSmallerAnimals">
              Bought chicken instead of beef or pork
            </label>
          </div>
          <div className="food-category__form--boxes">
            <input
              type="checkbox"
              id="meatBuyLessMeat"
              name="food"
              value="100"
            />
            <label htmlFor="meatBuyLessMeat">
              Bought meat less times this week
            </label>
          </div>
          <div className="food-category__form--boxes">
            <input type="checkbox" id="meatBuyFish" name="food" value="100" />
            <label htmlFor="meatBuyFish">Bought fish instead</label>
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
