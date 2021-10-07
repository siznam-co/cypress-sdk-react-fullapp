import { Route, Redirect } from "react-router-dom";

import { useAuth0 } from "@auth0/auth0-react";
import Loader from "../components/Loader/Loader";

export default function PrivateRoute({ children, ...rest }: any) {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <Loader />;

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
