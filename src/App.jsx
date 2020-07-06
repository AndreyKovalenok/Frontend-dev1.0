import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Complex from "./pages/Complex";

import "./styles.scss";

function App() {
  const [mainData, setMainData] = useState(null);
  const [isFetching, setFetching] = useState(true);

  useEffect(() => {
    fetch("/Frontend-dev1.0/data.json")
      .then((response) => response.json())
      .then((result) => {
        setMainData(result);
        setFetching(false);
      });
  }, []);

  return (
    <div className="App">
      <Header />
      {!isFetching ? (
        <Switch>
          <Route path="/Frontend-dev1.0" exact>
            <Home mainData={mainData} />
          </Route>
          <Route path="/Frontend-dev1.0/complex/:id" exact>
            <Complex mainData={mainData} />
          </Route>
        </Switch>
      ) : null}
      <Footer />
    </div>
  );
}

export default App;
