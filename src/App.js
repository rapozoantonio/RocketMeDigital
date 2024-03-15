import React, { Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
/*------ Pages-----*/
import DigitalMarketing from "./Pages/Digital-marketing";
import Service from "./Pages/Service";
import ServiceEn from "./Pages/ServiceEn";
import Process from "./Pages/Process";
import ScrollToTopRoute from "./ScrollToTopRoute";
import Faq from "./Pages/Faq";
import Portfoliosingle from "./Pages/Portfoliosingle";
import Startup from "./Pages/Startup";
import NotFound from "./Pages/404";

class App extends Component {
  componentDidMount() {
    this.props.hideLoader();
  }
  render() {
    return (
      <Router>
        <Switch>
          <ScrollToTopRoute exact={true} path={"/"} component={DigitalMarketing} />
          <ScrollToTopRoute path="/Serviços" component={Service} />
          <ScrollToTopRoute path="/Services" component={ServiceEn} />
          <ScrollToTopRoute path="/Processo" component={Process} />
          <ScrollToTopRoute path="/Portfolio" component={Portfoliosingle} />
          <ScrollToTopRoute path="/Faq" component={Faq} />
          <ScrollToTopRoute path="/Startup" component={Startup} />
          <ScrollToTopRoute component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
