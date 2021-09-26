import { Route, Redirect, Switch } from "react-router-dom";
import Landing from "./pages/landing";
import Login from "./pages/login";
import Register from "./pages/register";
import Home from "./pages/home";
import Event from "./pages/home/event"


export default function Routes() {
  return (
    <Switch>
      <Route component={Landing} path="/" exact />
      <Route component={Login} path="/login" />
      <Route component={Register} path="/register" />
      <Route component={Home} path="/home" />
      <Route component={Event} path="/event" />
      <Redirect to="/" />
    </Switch>
  )
}