import "./CommunalPage.scss";
import Category from "../../components/CategoryCard/Category";

function CommunalPage(props) {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    let buttonsChecked = document.querySelectorAll(
      'input[name="community"]:checked'
    );
    let values = [];
    buttonsChecked.forEach((checkbox) => {
      values.push(checkbox.value);
    });
    console.log(values);
  };
  return (
    <div className="communal">
      <div className="food-title">
        <h1>
          “If you think you are too small to be effective, you have never been
          in bed with a mosquito.” – Betty Reese
        </h1>
      </div>

      <Category>
        <div className="communal-category__subcategory">
          <h2>Volunteer</h2>
        </div>

        <form className="communal-category__form" onSubmit={onSubmitHandler}>
          <div className="communal-category__form--boxes">
            <input
              type="checkbox"
              id="40"
              name="community"
              value="community"
            />
            <label
              htmlFor="40"
              className="food-category__form--labels"
            >
              Cleaned up local parks
            </label>
          </div>
          <div className="communal-category__form--boxes">
            <input
              type="checkbox"
              id="41"
              name="volunteer"
              value="community"
            />
            <label
              htmlFor="41"
              className="food-category__form--labels"
            >
              Planted new trees
            </label>
          </div>
          <div className="communal-category__form--boxes">
            <input
              type="checkbox"
              id="42"
              name="community"
              value="community"
            />
            <label
              htmlFor="42"
              className="food-category__form--labels"
            >
              Added to community compost
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
        <div className="communal-category__subcategory">
          <h2>Transportation</h2>
        </div>

        <form className="communal-category__form" onSubmit={onSubmitHandler}>
          <div className="communal-category__form--boxes">
            <input
              type="checkbox"
              id="43"
              name="community"
              value="community"
            />
            <label
              htmlFor="43"
              className="food-category__form--labels"
            >
              Carpooled to work
            </label>
          </div>
          <div className="communal-category__form--boxes">
            <input
              type="checkbox"
              id="44"
              name="community"
              value="community"
            />
            <label
              htmlFor="44"
              className="food-category__form--labels"
            >
              Took the bus or train
            </label>
          </div>
          <div className="communal-category__form--boxes">
            <input
              type="checkbox"
              id="45"
              name="community"
              value="community"
            />
            <label
              htmlFor="45"
              className="food-category__form--labels"
            >
              Walked to the store or restaurant
            </label>
          </div>
          <div className="communal-category__form--boxes">
            <input
              type="checkbox"
              id="46"
              name="community"
              value="community"
            />
            <label
              htmlFor="46"
              className="food-category__form--labels"
            >
              Rode my bike
            </label>
          </div>
          <div>
            <button type="submit" className="food-category__form--btn">
              Submit
            </button>
          </div>
        </form>
      </Category>
    </div>
  );
}

export default CommunalPage;
