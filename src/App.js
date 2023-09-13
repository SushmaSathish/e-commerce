import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";

import Product1 from "./components/productjs/product1";
import Product2 from "./components/productjs/product2";
import Product3 from "./components/productjs/product3";
import Product4 from "./components/productjs/product4";
import Home from "./Pages/home";
import HeaderForAbout from "./Pages/Headerforabout";
import Store from "./components/itemsavailable/dummy";
import ContactUs from "./Pages/contact";
import AuthForm from "./Auth/auth-form";
import { useContext } from "react";
import AuthContext from "./Auth/auth-context";
import { useEffect } from "react";

function App() {
  const authCtx = useContext(AuthContext);
  const history = useHistory();
  useEffect(() => {
    if (!authCtx.isLoggedIn) {
      console.log(authCtx.isLoggedIn)
      history.replace("/");
    }
  }, [authCtx.isLoggedIn, history]);
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <AuthForm />
        </Route>
        {authCtx.isLoggedIn && (
          <Route path="/home">
            <Home />
          </Route>
        )}
        {authCtx.isLoggedIn && (
          <Route path="/about">
            <HeaderForAbout />
          </Route>
        )}
        {authCtx.isLoggedIn && (
          <Route path="/store"exact>
            <Store />
          </Route>
        )}

        {authCtx.isLoggedIn && (
          <Route path="/store2">
            <Product1 />
          </Route>
        )}
        {authCtx.isLoggedIn && (
          <Route path="/store1">
            <Product2 />
          </Route>
        )}
        {authCtx.isLoggedIn && (
          <Route path="/store3">
            <Product3 />
          </Route>
        )}
        {authCtx.isLoggedIn && (
          <Route path="/store4">
            <Product4 />
          </Route>
        )}

        {authCtx.isLoggedIn && (
          <Route path="/contact">
            <ContactUs />
          </Route>
        )}
      </Switch>
    </div>
  );
}