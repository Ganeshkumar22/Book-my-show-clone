// Transforms component in to another component
// Adding additional functionalities to the existing components

import React from "react";
import { Route } from "react-router-dom";

// Layouts
import DefaultLayout from "../layouts/Default.layout";

const DefaultHOC = ({ component: Component, ...rest }) => {
  return (
    <>
      <Route
        {...rest}
        component={(props) => (
          <DefaultLayout>
            <Component {...props} />
          </DefaultLayout>
        )}
      />
    </>
  );
};

export default DefaultHOC;
