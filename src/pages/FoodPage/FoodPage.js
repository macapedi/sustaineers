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
        <h1>Eat healthy food for a wealthy mood!</h1>
      </div>

      <Category>
        <div className="food-category__subcategory">
          <h2>Eating Local</h2>
        </div>

        <form className="food-category__form" onSubmit={onChangeHandler}>
          <div className="food-category__form--boxes">
            <input type="checkbox" id="local" name="food" value="100" />
            <label htmlFor="local" className="food-category__form--labels">
              Bought from farmer's market?
            </label>
          </div>

          <div className="food-category__form--boxes">
            <input type="checkbox" id="localjoinCoop" name="local" value="1" />

            <label
              htmlFor="localjoinCoop"
              className="food-category__form--labels"
            >
              Planted my own produce?
            </label>
          </div>
          <div className="food-category__form--boxes">
            <input type="checkbox" id="localjoinCoop" name="food" value="100" />
            <label
              htmlFor="localPlantGarden"
              className="food-category__form--labels"
            >
              Joined a Co-op
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
        <div className="food-category__subcategory">
          <h2>Reducing Food Waste</h2>
        </div>

        <form className="food-category__form" onChange={onChangeHandler}>
          <div className="food-category__form--boxes">
            <input
              type="checkbox"
              id="wasteFinishFood"
              name="food"
              value="100"
            />
            <label
              htmlFor="localFinishFood"
              className="food-category__form--labels"
            >
              Finished all food on my plate
            </label>
          </div>
          <div className="food-category__form--boxes">
            <input type="checkbox" id="wasteBuyLess" name="waste" value="100" />
            <label
              htmlFor="wasteBuyLess"
              className="food-category__form--labels"
            >
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
            <label
              htmlFor="wasteStoreFood"
              className="food-category__form--labels"
            >
              Stored food wisely
            </label>
          </div>
          <div className="food-category__form--boxes">
            <input
              type="checkbox"
              id="wasteBuyUglies"
              name="food"
              value="100"
            />
            <label
              htmlFor="wasteBuyUglies"
              className="food-category__form--labels"
            >
              Bought ugly fruits and vegetables
            </label>
          </div>
          <div className="food-category__form--boxes">
            <input
              type="checkbox"
              id="wasteDonateFood"
              name="food"
              value="100"
            />
            <label
              htmlFor="wasteDonateFood"
              className="food-category__form--labels"
            >
              Donated food that I didn't use
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
        <div className="food-category__subcategory">
          <h2>Meat Choices</h2>
        </div>

        <form className="food-category__form" onChange={onChangeHandler}>
          <div className="food-category__form--boxes">
            <input type="checkbox" id="meatDontBuy" name="food" value="100" />
            <label
              htmlFor="meatDontBuy"
              className="food-category__form--labels"
            >
              Skip the meat isle
            </label>
          </div>
          <div className="food-category__form--boxes">
            <input
              type="checkbox"
              id="meatSmallerAnimals"
              name="food"
              value="100"
            />
            <label
              htmlFor="meatSmallerAnimals"
              className="food-category__form--labels"
            >
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
            <label
              htmlFor="meatBuyLessMeat"
              className="food-category__form--labels"
            >
              Bought meat less times this week
            </label>
          </div>
          <div className="food-category__form--boxes">
            <input type="checkbox" id="meatBuyFish" name="food" value="100" />
            <label
              htmlFor="meatBuyFish"
              className="food-category__form--labels"
            >
              Bought fish instead
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
