import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import Login from "../../login";

export default function WithAuthGuard(Component) {
  return function AuthGuard(props) {
    const { user, isLoading } = useContext(AuthContext);
    if (isLoading) {
      return <div>Loading...</div>;
    }
    if (!user?.uid) {
      return <Login />;
    }
    return <Component {...props} />;
  };
}
