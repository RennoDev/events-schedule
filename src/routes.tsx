import { Route, BrowserRouter, Redirect } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";

export default function Routes() {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={Login} path="/login" />
      <Route component={Register} path="/register" />
      <Redirect to="/" />
    </BrowserRouter>
  )
}