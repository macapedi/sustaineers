import "./EnergyPage.scss";
import Category from "../../components/CategoryCard/Category";
import Footer from "../../components/Footer/Footer";

function EnergyPage() {
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <div>
        <h1>This is Energy Page</h1>
      </div>
      <Category>
        <div className="food-category__subcategory">
          <h2>Electricity</h2>
        </div>

        <form className="food-category__form" onSubmit={onSubmitHandler}>
          <div className="food-category__form--boxes">
            <input type="checkbox" id="energy" name="energy" value="100" />
            <label htmlFor="energy" />
            Turned off unnecessary lights?
          </div>
          <div className="food-category__form--boxes">
            <input type="checkbox" id="metal" name="energy" value="100" />
            <label htmlFor="metal">Minimized time used For electronics?</label>
          </div>
          <div className="food-category__form--boxes">
            <input type="checkbox" id="utensils" name="energy" value="100" />
            <label htmlFor="utensils">
              Turned off AC and lights when not home?
            </label>
          </div>

          <button type="submit">Submit</button>
        </form>
      </Category>

      <Category>
        <div className="food-category__subcategory">
          <h2>Water</h2>
        </div>

        <form className="food-category__form" onSubmit={onSubmitHandler}>
          <div className="food-category__form--boxes">
            <input type="checkbox" id="energy" name="energy" value="100" />
            <label htmlFor="energy" />
            Used your automatic dishwasher/wachine machines for full loads only?
          </div>
          <div className="food-category__form--boxes">
            <input type="checkbox" id="metal" name="energy" value="100" />
            <label htmlFor="metal">Checked faucets and pipes for leaks?</label>
          </div>
          <div className="food-category__form--boxes">
            <input type="checkbox" id="utensils" name="energy" value="100" />
            <label htmlFor="utensils">Took shorter showers?</label>
          </div>

          <div className="food-category__form--boxes">
            <input type="checkbox" id="solo" name="energy" value="100" />
            <label htmlFor="solo">
              Turned off water while brushing/shaving?
            </label>
          </div>

          <div className="food-category__form--boxes">
            <input type="checkbox" id="solo" name="energy" value="100" />
            <label htmlFor="solo">Watered your lawn only when it needs?</label>
          </div>

          <button type="submit">Submit</button>
        </form>
      </Category>
      <Category>
        <div className="food-category__subcategory">
          <h2>Gas</h2>
        </div>

        <form className="food-category__form" onSubmit={onSubmitHandler}>
          <div className="food-category__form--boxes">
            <input type="checkbox" id="energy" name="energy" value="100" />
            <label htmlFor="energy" />
            Drove electric vehicles?
          </div>
          <div className="food-category__form--boxes">
            <input type="checkbox" id="metal" name="energy" value="100" />
            <label htmlFor="metal">Combined short trips while driving?</label>
          </div>
          <div className="food-category__form--boxes">
            <input type="checkbox" id="utensils" name="energy" value="100" />
            <label htmlFor="utensils">Inflated your tires?</label>
          </div>

          <div className="food-category__form--boxes">
            <input type="checkbox" id="utensils" name="energy" value="100" />
            <label htmlFor="utensils">Replaced your air filter?</label>
          </div>

          <div className="food-category__form--boxes">
            <input type="checkbox" id="solo" name="energy" value="100" />
            <label htmlFor="solo">Used the highest feasible gear?</label>
          </div>

          <button type="submit">Submit</button>
        </form>
      </Category>
    </div>
  );
}

export default EnergyPage;
