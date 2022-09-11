import React from "react";
import { BrowserRouter, Switch, Route, Redirect, Link } from "react-router-dom";

import "./App.scss";
import userData from "./data/users.json";
import CommunalPage from "./pages/CommunalPage/CommunalPage";
import EnergyPage from "./pages/EnergyPage/EnergyPage";
import HomePage from "./pages/HomePage/HomePage";
import FoodPage from "./pages/FoodPage/FoodPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import RecyclablePage from "./pages/RecyclablePage/RecyclablesPage";
import Header from "./components/Header/Header";
import CommunityPage from "./pages/CommunityPage/CommunityPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import LoginPage from "./pages/LoginPage/LoginPage";

function App() {


  const handleSubmit = (points, userId) => {
    if (userData.user === userId) {
      return userData.points = points;
    }
  }


  return (
    <div className="App">
      <BrowserRouter>
        <Header />
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
          <Route path="/login" exact component={LoginPage} />
          <Route
            path="/profiles"
            exact
            render={(routerProps) => {
              return <CommunityPage routerProps={routerProps} />;
            }}
          />

          <Route
            path="/profiles/:id"
            exact
            render={(routerProps) => {
              return <ProfilePage routerProps={routerProps} />;
            }}
          />

          <Route path="/communal" exact
            render={(routerProps) => {
              return <CommunalPage
                handleSubmit={handleSubmit}
                routerProps={routerProps} />;
            }}
          />
          <Route path="/food" exact
            render={(routerProps) => {
              return <FoodPage
                handleSubmit={handleSubmit}
                routerProps={routerProps} />;
            }}
          />
          <Route path="/energy" exact
            render={(routerProps) => {
              return <EnergyPage
                handleSubmit={handleSubmit}
                routerProps={routerProps} />;
            }}
          />
          <Route path="/recyclable" exact
            render={(routerProps) => {
              return <RecyclablePage
                handleSubmit={handleSubmit}
                routerProps={routerProps} />;
            }}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
