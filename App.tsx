import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { Navbar } from "./components/Navbar";
import {TodoPage} from "./pages/TodosPage"
import {AboutPage} from "./pages/AboutPage"




// check update
const App: React.FC = () => {


  return (
    <BrowserRouter >
      <Navbar />
      <div className="container">
        <Switch>
          <Route component={TodoPage} path="/"  exact ></Route>
          <Route component={AboutPage} path="/about"></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
