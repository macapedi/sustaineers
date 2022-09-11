import "./EnergyPage.scss";
import Category from "../../components/CategoryCard/Category";
import Footer from "../../components/Footer/Footer";

function EnergyPage() {
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <div className="food-title">
        <h1>Energy saved is Energy generated!</h1>
      </div>
      <Category>
        <div className="food-category__subcategory">
          <h2>Electricity</h2>
        </div>

        <form className="food-category__form" onSubmit={onSubmitHandler}>
          <div className="food-category__form--boxes">
            <input type="checkbox" id="energy" name="energy" value="100" />
            <label htmlFor="energy" className="food-category__form--labels">
              Turned off unnecessary lights?
            </label>
          </div>
          <div className="food-category__form--boxes">
            <input type="checkbox" id="energy" name="energy" value="100" />
            <label htmlFor="energy" className="food-category__form--labels">
              Minimized time used For electronics?
            </label>
          </div>
          <div className="food-category__form--boxes">
            <input type="checkbox" id="energy" name="energy" value="100" />
            <label htmlFor="energy" className="food-category__form--labels">
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
            <label htmlFor="energy" className="food-category__form--labels">
              Used your automatic dishwasher/wachine machines for full loads
              only?
            </label>
          </div>
          <div className="food-category__form--boxes">
            <input type="checkbox" id="energy" name="energy" value="100" />
            <label htmlFor="energy" className="food-category__form--labels">
              Checked faucets and pipes for leaks?
            </label>
          </div>
          <div className="food-category__form--boxes">
            <input type="checkbox" id="energy" name="energy" value="100" />
            <label htmlFor="energy" className="food-category__form--labels">
              Took shorter showers?
            </label>
          </div>

          <div className="food-category__form--boxes">
            <input type="checkbox" id="energy" name="energy" value="100" />
            <label htmlFor="energy" className="food-category__form--labels">
              Turned off water while brushing/shaving?
            </label>
          </div>

          <div className="food-category__form--boxes">
            <input type="checkbox" id="energy" name="energy" value="100" />
            <label htmlFor="energy" className="food-category__form--labels">
              Watered your lawn only when it needs?
            </label>
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
            <label htmlFor="energy" className="food-category__form--labels">
              Drove electric vehicles?
            </label>
          </div>
          <div className="food-category__form--boxes">
            <input type="checkbox" id="energy" name="energy" value="100" />
            <label htmlFor="energy" className="food-category__form--labels">
              Combined short trips while driving?
            </label>
          </div>
          <div className="food-category__form--boxes">
            <input type="checkbox" id="energy" name="energy" value="100" />
            <label htmlFor="energy" className="food-category__form--labels">
              Inflated your tires?
            </label>
          </div>

          <div className="food-category__form--boxes">
            <input type="checkbox" id="energy" name="energy" value="100" />
            <label htmlFor="energy" className="food-category__form--labels">
              Replaced your air filter?
            </label>
          </div>

          <div className="food-category__form--boxes">
            <input type="checkbox" id="energy" name="energy" value="100" />
            <label htmlFor="energy" className="food-category__form--labels">
              Used the highest feasible gear?
            </label>
          </div>

          <button type="submit">Submit</button>
        </form>
      </Category>
    </div>
  );
}

export default EnergyPage;
