import React from "react";
import SearchForm from "./components/SearchForm";
import Homepage from "./components/Homepage";
import NavigationBar from "./components/NavigationBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <NavigationBar />
      <Router>
        <Switch>
          <React.Fragment>
            <div>
              <Route path="/searchForm" component={SearchForm} />
              <Route path="/home" component={Homepage} />
            </div>
          </React.Fragment>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
