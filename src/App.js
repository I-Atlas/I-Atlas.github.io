import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { useTransition, animated } from "react-spring";
import { Home, Contact, Portfolio, Resume } from "./pages";
import { Loader } from "./components";
import "./styles.css";

function App() {
  const location = useLocation();
  const transitions = useTransition(location, (location) => location.pathname, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <React.Fragment>
      <Loader />
      {transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={props} className="main">
          <Switch location={item}>
            <Route exact path="/" component={Home} />
            <Route exact path="/cv" component={Resume} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </animated.div>
      ))}
    </React.Fragment>
  );
}

export default App;
