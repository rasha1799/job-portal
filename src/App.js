import "./App.css";
import Header from "../src/Pages/Header/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Apply from "./Pages/Apply/Apply";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Home/Login/Login";
import Register from "./Pages/Home/Register/Register";
import PrivateRoute from "./Pages/Home/Login/PrivateRoute";
import AuthProvider from "./Contexts/AuthProvider";
import Applications from "./Pages/Applications/Applications";

function App() {
  return (
    <div className="App">
      <Header></Header>

      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/applications">
              <Applications></Applications>
            </PrivateRoute>

            <PrivateRoute path="/apply/:_id">
              <Apply></Apply>
            </PrivateRoute>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
