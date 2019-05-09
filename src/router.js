import React from "react"
import { Route, Switch } from "react-router-dom"
import Home from "./pagestates/home/home";
import Portfolio from "./pagestates/portfolio/portfolio";
import Profile from "./pagestates/profile/profile";

const Router = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/profile" component={Profile} />
      <Route path="/portfolio" component={Portfolio} />
    </Switch>
  )
}

export default Router
