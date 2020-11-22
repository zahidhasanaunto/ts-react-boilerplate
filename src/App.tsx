import React from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { HomePage } from "./@pages/home/home.page";
import { AppRootProvider } from "./@providers/root.provider";
import { AppThemeProvider } from "./@providers/theme.provider";
import './App.scss';

export const App = () => {

  return (
    <AppRootProvider>
      <AppThemeProvider>
        <Router>
          <Switch>
            <Route path="/frameworks" render={props => <HomePage {...props} />}></Route>
            <Redirect exact path="/" to="/frameworks" />
          </Switch>
        </Router>
      </AppThemeProvider>
    </AppRootProvider>
  );
};
