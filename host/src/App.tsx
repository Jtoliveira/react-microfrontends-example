import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

import { BrowserRouter,  Routes, Route} from "react-router-dom";

import Home from './Home'

import NavbarComponent from "./NavbarComponent";
import SafeRemoteComponent from "./SafeRemoteComponent";

const App = () => (
    <BrowserRouter>
    <NavbarComponent />
      <div className="text-3xl mx-auto max-w-6xl">
        <div className="my-10">
          <Routes>
            <Route path="/" element={ <Home />}></Route>
            <Route path="/remote" element={
                <SafeRemoteComponent />
            }></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
    );


ReactDOM.render(<App />, document.getElementById("app"));
