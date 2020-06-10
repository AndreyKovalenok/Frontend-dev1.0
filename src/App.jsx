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
    fetch("/data.json")
      .then((response) => response.json())
      .then((result) => {
        setMainData(result);
        setFetching(false);
      });
  }, []);

  return (
    <div className="App">
      {!isFetching ? (
        <>
          <Header />
          <Switch>
            <Route path="/" exact>
              <Home mainData={mainData} />
            </Route>
            <Route path="/complex/:id" exact>
              <Complex mainData={mainData} />
            </Route>
          </Switch>
          <Footer />
        </>
      ) : null}
    </div>
  );
}

export default App;
