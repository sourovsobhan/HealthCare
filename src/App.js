import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";

import Home from "./components/Home/Home/Home";
import Services from "./components/Home/Services/Services";
import Footer from "./components/Shared/Footer/Footer";
import Header from "./components/Shared/Header/Header";
import NotFound from "./components/NotFound/NotFound";
import Contact from "./components/Contact/Contact";
import Login from "./components/Login/Login";

import Doctor from "./components/Doctor/Doctor";
import Details from "./components/Details/Details/Details";
import AuthProvider from "./components/AuthProvider/AuthProvider";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>

          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <PrivateRoute path="/contact">
              <Contact></Contact>
            </PrivateRoute>
            <Route path="/doctor">
              <Doctor></Doctor>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/details/:serviceId">
              <Details></Details>
            </PrivateRoute>

            <Route path="*" exact>
              <NotFound></NotFound>
            </Route>
          </Switch>

          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
