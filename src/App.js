import React, { Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
/*------ Pages-----*/
import DigitalMarketing from "./Pages/Digital-marketing";
import Service from "./Pages/Service";
import Process from "./Pages/Process";
import ScrollToTopRoute from "./ScrollToTopRoute";
import Faq from "./Pages/Faq";
import NotFound from "./Pages/404";

class App extends Component {
  // componentDidMount() {
  //   this.props.hideLoader();
  // }
  render() {
    return (
      <Router>
        <Switch>
          <ScrollToTopRoute exact={true} path={"/"} component={DigitalMarketing} />
          <ScrollToTopRoute
            path="/Digital-marketing"
            component={DigitalMarketing}
          />
          {/* <ScrollToTopRoute path="/Service" component={Service} />
          <ScrollToTopRoute path="/Process" component={Process} />
          <ScrollToTopRoute path="/Faq" component={Faq} />
          <ScrollToTopRoute component={NotFound} /> */}
        </Switch>
      </Router>
    );
  }
}

export default App;
