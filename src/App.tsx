import Login from "./views/Login";
import { useAuth0 } from "@auth0/auth0-react";
import Homepage from "./views/Homepage";

export default function App() {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? <Homepage /> : <Login />;
}
