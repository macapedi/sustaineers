import "./RecyclablePage.scss";
import Category from "../../components/CategoryCard/Category";

function RecyclablePage() {
  const onSubmitHandler = (e) => {
    e.preventDeafault();
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
            <label htmlFor="recycle" />
            Used reusable Bags?
          </div>
          <div className="food-category__form--boxes">
            <input type="checkbox" id="recycle" name="recycle" value="1" />
            <label htmlFor="recycle">Not used plastic bags?</label>
          </div>
          <div className="food-category__form--boxes">
            <input type="checkbox" id="recycle" name="recycle" value="1" />
            <label htmlFor="recycle">
              Used washable non-plastic utensils ?
            </label>
          </div>

          <div className="food-category__form--boxes">
            <input type="checkbox" id="recycle" name="recycle" value="1" />
            <label htmlFor="recycle">
              Used ceramic instead of solo or styrofoam cups?
            </label>
          </div>

          <button type="submit">Submit</button>
        </form>
      </Category>

      <Category>
        <div className="food-category__subcategory">
          <h2>Clothing</h2>
        </div>

        <form className="food-category__form" onSubmit={onSubmitHandler}>
          <div className="food-category__form--boxes">
            <input type="checkbox" id="recycle" name="recycle" value="1" />
            <label htmlFor="recycle" />
            Avoided fast fashion items?
          </div>
          <div className="food-category__form--boxes">
            <input type="checkbox" id="recycle" name="recycle" value="1" />
            <label htmlFor="recycle">Bought less items?</label>
          </div>
          <div className="food-category__form--boxes">
            <input type="checkbox" id="recycle" name="recycle" value="1" />
            <label htmlFor="recycle">
              Chose higher quality materials that last longer?
            </label>
          </div>

          <div className="food-category__form--boxes">
            <input type="checkbox" id="recycle" name="recycle" value="1" />
            <label htmlFor="recycle">Repaired or donated your clothes?</label>
          </div>

          <button type="submit">Submit</button>
        </form>
      </Category>

      <Category>
        <div className="food-category__subcategory">
          <h2>Paper</h2>
        </div>

        <form className="food-category__form" onSubmit={onSubmitHandler}>
          <div className="food-category__form--boxes">
            <input type="checkbox" id="recycle" name="recycle" value="1" />
            <label htmlFor="recycle" />
            Used electronic notes?
          </div>
          <div className="food-category__form--boxes">
            <input type="checkbox" id="recycle" name="recycle" value="1" />
            <label htmlFor="recycle">
              Used washable towels instead of paper for cleaning?
            </label>
          </div>
          <div className="food-category__form--boxes">
            <input type="checkbox" id="recycle" name="recycle" value="1" />
            <label htmlFor="recycle">
              Printed double sides for school or work?{" "}
            </label>
          </div>

          <button type="submit">Submit</button>
        </form>
      </Category>
    </div>
  );
}

export default RecyclablePage;
