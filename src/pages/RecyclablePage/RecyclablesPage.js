import "./RecyclablePage.scss";
import Category from "../../components/CategoryCard/Category";

function RecyclablePage() {
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div>
        <h1>This is Recyclable Page</h1>
      </div>
      <Category>
        <div className="food-category__subcategory">
          <h2>Reduce Plastic Use</h2>
        </div>

        <form className="food-category__form" onSubmit={onSubmitHandler}>
          <div className="food-category__form--boxes">
            <input type="checkbox" id="recycle" name="recycle" value="1" />
            <label htmlFor="recycle" className="food-category__form--labels">
              Used reusable Bags?{" "}
            </label>
          </div>
          <div className="food-category__form--boxes">
            <input type="checkbox" id="recycle" name="recycle" value="1" />
            <label htmlFor="recycle" className="food-category__form--labels">
              Not used plastic bags?
            </label>
          </div>
          <div className="food-category__form--boxes">
            <input type="checkbox" id="recycle" name="recycle" value="1" />
            <label htmlFor="recycle" className="food-category__form--labels">
              Used washable non-plastic utensils ?
            </label>
          </div>

          <div className="food-category__form--boxes">
            <input type="checkbox" id="recycle" name="recycle" value="1" />
            <label htmlFor="recycle" className="food-category__form--labels">
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
            <input type="checkbox" id="recycle" name="recycle" value="1" />
            <label htmlFor="recycle" className="food-category__form--labels">
              Avoided fast fashion items?
            </label>
          </div>
          <div className="food-category__form--boxes">
            <input type="checkbox" id="recycle" name="recycle" value="1" />
            <label htmlFor="recycle" className="food-category__form--labels">
              Bought less items?
            </label>
          </div>
          <div className="food-category__form--boxes">
            <input type="checkbox" id="recycle" name="recycle" value="1" />
            <label htmlFor="recycle" className="food-category__form--labels">
              Chose higher quality materials that last longer?
            </label>
          </div>

          <div className="food-category__form--boxes">
            <input type="checkbox" id="recycle" name="recycle" value="1" />
            <label htmlFor="recycle" className="food-category__form--labels">
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
            <input type="checkbox" id="recycle" name="recycle" value="1" />
            <label htmlFor="recycle" className="food-category__form--labels">
              Used electronic notes?{" "}
            </label>
          </div>
          <div className="food-category__form--boxes">
            <input type="checkbox" id="recycle" name="recycle" value="1" />
            <label htmlFor="recycle" className="food-category__form--labels">
              Used washable towels instead of paper for cleaning?
            </label>
          </div>
          <div className="food-category__form--boxes">
            <input type="checkbox" id="recycle" name="recycle" value="1" />
            <label htmlFor="recycle" className="food-category__form--labels">
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
