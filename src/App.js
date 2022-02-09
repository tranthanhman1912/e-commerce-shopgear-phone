import React from "react";
import {BrowserRouter} from "react-router-dom";
import Router from "./router/Router";
import Header from "./components/Header";
import Footer from "./components/Footer";
export default function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <div className="container">
          <div className="main">
            <Router />
          </div>
        </div>
        <Footer />
      </>
    </BrowserRouter>
  );
}
