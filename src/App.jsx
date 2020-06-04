import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Card from "./pages/Card";

import "./styles.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/Card" component={Card} exact />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
