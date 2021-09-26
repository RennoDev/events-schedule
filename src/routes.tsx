import { Route, Redirect, Switch } from "react-router-dom";
import Landing from "./pages/landing";
import Login from "./pages/login";
import Register from "./pages/register";

export default function Routes() {
  return (
    <Switch>
      <Route component={Landing} path="/" exact />
      <Route component={Login} path="/login" />
      <Route component={Register} path="/register" />
      <Redirect to="/" />
    </Switch>
  )
}