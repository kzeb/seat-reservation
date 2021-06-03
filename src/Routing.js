import React from "react";
import { Switch, Route } from "react-router-dom";
import { Start } from "./domain/Start";
import { Reserve } from "./domain/Reserve";
import { Summary } from "./domain/Summary";

export const Routing = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Start />
        </Route>
        <Route exact path="/reserve">
          <Reserve />
        </Route>
        <Route exact path="/summary">
          <Summary />
        </Route>
      </Switch>
    </>
  );
};
