import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/pageBlocks/Header";
import Footer from "./components/pageBlocks/Footer";
import Home from "./pages/Home";
import Complex from "./pages/Complex";

import "./styles.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/complex/:id" component={Complex} exact />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
