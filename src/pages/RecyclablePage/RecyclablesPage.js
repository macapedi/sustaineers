import "./RecyclablePage.scss";
import Category from "../../components/CategoryCard/Category";

function RecyclablePage() {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    let buttonsChecked = document.querySelectorAll(
      'input[name="recycle"]:checked'
    );
    let values = [];
    buttonsChecked.forEach((checkbox) => {
      values.push(checkbox.value);
    });
    console.log(values);
  };

  return (
    <div>
      <div className="food-title">
        <h1>Recycle the present, save the future !</h1>
      </div>
      <Category>
        <div className="food-category__subcategory">
          <h2>Reduce Plastic Use</h2>
        </div>

        <form className="food-category__form" onSubmit={onSubmitHandler}>
          <div className="food-category__form--boxes">
            <input type="checkbox" id="20" name="recycle" value="recycle" />
            <label htmlFor="20" className="food-category__form--labels">
              Used reusable Bags?{" "}
            </label>
          </div>
          <div className="food-category__form--boxes">
            <input type="checkbox" id="21" name="recycle" value="recycle" />
            <label htmlFor="21" className="food-category__form--labels">
              Not used plastic bags?
            </label>
          </div>
          <div className="food-category__form--boxes">
            <input type="checkbox" id="22" name="recycle" value="recycle" />
            <label htmlFor="22" className="food-category__form--labels">
              Used washable non-plastic utensils ?
            </label>
          </div>

          <div className="food-category__form--boxes">
            <input type="checkbox" id="23" name="recycle" value="recycle" />
            <label htmlFor="23" className="food-category__form--labels">
              Used ceramic instead of solo or styrofoam cups?
            </label>
          </div>

          <button type="submit" className="food-category__form--btn">
            Submit
          </button>
        </form>
      </Category>

      <Category>
        <div className="food-category__subcategory">
          <h2>Clothing</h2>
        </div>

        <form className="food-category__form" onSubmit={onSubmitHandler}>
          <div className="food-category__form--boxes">
            <input type="checkbox" id="24" name="recycle" value="recycle"/>
            <label htmlFor="24" className="food-category__form--labels">
              Avoided fast fashion items?
            </label>
          </div>
          <div className="food-category__form--boxes">
            <input type="checkbox" id="25" name="recycle" value="recycle" />
            <label htmlFor="25" className="food-category__form--labels">
              Bought less items?
            </label>
          </div>
          <div className="food-category__form--boxes">
            <input type="checkbox" id="26" name="recycle" value="recycle" />
            <label htmlFor="26" className="food-category__form--labels">
              Chose higher quality materials that last longer?
            </label>
          </div>

          <div className="food-category__form--boxes">
            <input type="checkbox" id="27" name="recycle" value="recycle" />
            <label htmlFor="27" className="food-category__form--labels">
              Repaired or donated your clothes?
            </label>
          </div>

          <button type="submit" className="food-category__form--btn">
            Submit
          </button>
        </form>
      </Category>

      <Category>
        <div className="food-category__subcategory">
          <h2>Paper</h2>
        </div>

        <form className="food-category__form" onSubmit={onSubmitHandler}>
          <div className="food-category__form--boxes">
            <input type="checkbox" id="28" name="recycle" value="recycle" />
            <label htmlFor="28" className="food-category__form--labels">
              Used electronic notes?{" "}
            </label>
          </div>
          <div className="food-category__form--boxes">
            <input type="checkbox" id="29" name="recycle" value="recycle" />
            <label htmlFor="29" className="food-category__form--labels">
              Used washable towels instead of paper for cleaning?
            </label>
          </div>
          <div className="food-category__form--boxes">
            <input type="checkbox" id="30" name="recycle" value="recycle" />
            <label htmlFor="30" className="food-category__form--labels">
              Printed double sides for school or work?{" "}
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

export default RecyclablePage;
