import "./FoodPage.scss";
import Category from "../../components/CategoryCard/Category";

let submitLocalStatus = false;
let submitFoodWasteStatus = false;
let sumbitMeatChoicesStatus = false;
let values = [];
let totalpoints = 0;

function FoodPage(props) {
  const onSubmitHandler = (e) => {
    e.preventDefault();

    console.log("before", totalpoints);
    let buttonsChecked = document.querySelectorAll(
      'input[name="food"]:checked'
    );
    buttonsChecked.forEach((checkbox) => {
      values.push(checkbox.value);
    });
    totalpoints = values.length * 100;
    values = [];
    console.log("after", totalpoints);
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

        <form className="food-category__form" onSubmit={onSubmitHandler}>
          <div className="food-category__form--boxes">
            <input type="checkbox" id="1" name="food" value="food" />
            <label htmlFor="1" className="food-category__form--labels">
              Bought from farmer's market?
            </label>
          </div>

          <div className="food-category__form--boxes">
            <input type="checkbox" id="2" name="food" value="food" />

            <label htmlFor="2" className="food-category__form--labels">
              Planted my own produce?
            </label>
          </div>
          <div className="food-category__form--boxes">
            <input type="checkbox" id="3" name="food" value="food" />
            <label htmlFor="3" className="food-category__form--labels">
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

        <form className="food-category__form" onSubmit={onSubmitHandler}>
          <div className="food-category__form--boxes">
            <input type="checkbox" id="4" name="food" value="food" />
            <label htmlFor="4" className="food-category__form--labels">
              Finished all food on my plate
            </label>
          </div>
          <div className="food-category__form--boxes">
            <input type="checkbox" id="5" name="food" value="food" />
            <label htmlFor="5" className="food-category__form--labels">
              Bought less quantity to reduce spoilage
            </label>
          </div>
          <div className="food-category__form--boxes">
            <input type="checkbox" id="6" name="food" value="food" />
            <label htmlFor="6" className="food-category__form--labels">
              Stored food wisely
            </label>
          </div>
          <div className="food-category__form--boxes">
            <input type="checkbox" id="7" name="food" value="food" />
            <label htmlFor="7" className="food-category__form--labels">
              Bought ugly fruits and vegetables
            </label>
          </div>
          <div className="food-category__form--boxes">
            <input type="checkbox" id="8" name="food" value="food" />
            <label htmlFor="8" className="food-category__form--labels">
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

        <form className="food-category__form" onSubmit={onSubmitHandler}>
          <div className="food-category__form--boxes">
            <input type="checkbox" id="9" name="food" value="food" />
            <label htmlFor="9" className="food-category__form--labels">
              Skip the meat isle
            </label>
          </div>
          <div className="food-category__form--boxes">
            <input type="checkbox" id="10" name="food" value="food" />
            <label htmlFor="10" className="food-category__form--labels">
              Bought chicken instead of beef or pork
            </label>
          </div>
          <div className="food-category__form--boxes">
            <input type="checkbox" id="11" name="food" value="food" />
            <label htmlFor="11" className="food-category__form--labels">
              Bought meat less times this week
            </label>
          </div>
          <div className="food-category__form--boxes">
            <input type="checkbox" id="12" name="food" value="food" />
            <label htmlFor="12" className="food-category__form--labels">
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
