import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { useTransition, animated } from "react-spring";
import { Home, Contact, Work, About } from "../../pages";
import styles from "./routes.module.css";

function Routes() {
  const location = useLocation();
  const transitions = useTransition(location, (location) => location.pathname, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });
  return (
    <React.Fragment>
      {transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={props} className={styles.main}>
          <Switch location={item}>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/work" component={Work} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </animated.div>
      ))}
    </React.Fragment>
  );
}

export default Routes;
