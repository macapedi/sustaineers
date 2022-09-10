import React from "react";
import { BrowserRouter, Switch, Route, Redirect, Link } from "react-router-dom";
import "./App.scss";
import CommunalPage from "./pages/CommunalPage/CommunalPage";
import EnergyPage from "./pages/EnergyPage/EnergyPage";
import HomePage from "./pages/HomePage/HomePage";
import FoodPage from "./pages/FoodPage/FoodPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import RecyclablePage from "./pages/RecyclablePage/RecyclablesPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" to="/landing" exact component={LandingPage} />
          <Route
            path="/home"
            exact
            render={(routerProps) => {
              return <HomePage routerProps={routerProps} />;
            }}
          />
          <Route path="/landing" exact component={LandingPage} />
          <Route path="/communal" exact component={CommunalPage} />
          <Route path="/food" exact component={FoodPage} />
          <Route path="/energy" exact component={EnergyPage} />
          <Route path="/recyclable" exact component={RecyclablePage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
