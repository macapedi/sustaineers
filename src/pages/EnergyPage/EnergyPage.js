import "./EnergyPage.scss";
import Category from "../../components/CategoryCard/Category";
import Footer from "../../components/Footer/Footer";

function EnergyPage() {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    let buttonsChecked = document.querySelectorAll(
      'input[name="energy"]:checked'
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
        <h1>Energy saved is Energy generated!</h1>
      </div>
      <Category>
        <div className="food-category__subcategory">
          <h2>Electricity</h2>
        </div>

        <form className="food-category__form" onSubmit={onSubmitHandler}>
          <div className="food-category__form--boxes">
            <input type="checkbox" id="60" name="energy" value="energy" />
            <label htmlFor="60" className="food-category__form--labels">
              Turned off unnecessary lights?
            </label>
          </div>
          <div className="food-category__form--boxes">
            <input type="checkbox" id="61" name="energy" value="energy" />
            <label htmlFor="61" className="food-category__form--labels">
              Minimized time used For electronics?
            </label>
          </div>
          <div className="food-category__form--boxes">
            <input type="checkbox" id="62" name="energy" value="energy" />
            <label htmlFor="62" className="food-category__form--labels">
              Turned off AC and lights when not home?
            </label>
          </div>

          <button type="submit" className="food-category__form--btn">
            Submit
          </button>
        </form>
      </Category>

      <Category>
        <div className="food-category__subcategory">
          <h2>Water</h2>
        </div>

        <form className="food-category__form" onSubmit={onSubmitHandler}>
          <div className="food-category__form--boxes">
            <input type="checkbox" id="63" name="energy" value="energy" />
            <label htmlFor="63" className="food-category__form--labels">
              Used your dishwasher/washing machines for full loads only?
            </label>
          </div>
          <div className="food-category__form--boxes">
            <input type="checkbox" id="64" name="energy" value="energy" />
            <label htmlFor="64" className="food-category__form--labels">
              Checked faucets and pipes for leaks?
            </label>
          </div>
          <div className="food-category__form--boxes">
            <input type="checkbox" id="65" name="energy" value="energy" />
            <label htmlFor="65" className="food-category__form--labels">
              Took shorter showers?
            </label>
          </div>

          <div className="food-category__form--boxes">
            <input type="checkbox" id="66" name="energy" value="energy" />
            <label htmlFor="66" className="food-category__form--labels">
              Turned off water while brushing/shaving?
            </label>
          </div>

          <div className="food-category__form--boxes">
            <input type="checkbox" id="67" name="energy" value="energy" />
            <label htmlFor="67" className="food-category__form--labels">
              Watered your lawn only when it needs?
            </label>
          </div>

          <button type="submit" className="food-category__form--btn">
            Submit
          </button>
        </form>
      </Category>
      <Category>
        <div className="food-category__subcategory">
          <h2>Gas</h2>
        </div>

        <form className="food-category__form" onSubmit={onSubmitHandler}>
          <div className="food-category__form--boxes">
            <input type="checkbox" id="68" name="energy" value="energy" />
            <label htmlFor="68" className="food-category__form--labels">
              Drove electric vehicles?
            </label>
          </div>
          <div className="food-category__form--boxes">
            <input type="checkbox" id="69" name="energy" value="energy" />
            <label htmlFor="69" className="food-category__form--labels">
              Combined short trips while driving?
            </label>
          </div>
          <div className="food-category__form--boxes">
            <input type="checkbox" id="70" name="energy" value="energy" />
            <label htmlFor="70" className="food-category__form--labels">
              Inflated your tires?
            </label>
          </div>

          <div className="food-category__form--boxes">
            <input type="checkbox" id="71" name="energy" value="energy" />
            <label htmlFor="71" className="food-category__form--labels">
              Replaced your air filter?
            </label>
          </div>

          <div className="food-category__form--boxes">
            <input type="checkbox" id="72" name="energy" value="energy" />
            <label htmlFor="72" className="food-category__form--labels">
              Used the highest feasible gear?
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

export default EnergyPage;
