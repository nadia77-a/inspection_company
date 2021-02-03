import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { checkAuthorization } from "helpers/helpers";

const PrivateRoute = ({
  component: Component,
  redirect: pathname,
  ...rest
}) => {
  const Routes = (props) => {
    if (checkAuthorization() === true) {
      return (
        <Route
          {...rest}
          render={(props) => (
            <div className="privateLayout">
              <Component {...rest} {...props} />
            </div>
          )}
        />
      );
    } else {
      return (
        <Redirect
          to={{
            pathname,
            state: { from: props.location },
          }}
        />
      );
    }
  };
  return <Routes />;
};

PrivateRoute.defaultProps = { redirect: "/home" };

PrivateRoute.propTypes = {
  component: PropTypes.object.isRequired,
  redirect: PropTypes.string,
};

export default PrivateRoute;
