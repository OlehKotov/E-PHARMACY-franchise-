import { selectIsLoggedIn } from "../../redux/selectors";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const RestrictedRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? <Navigate to="/create-shop" replace /> : children;
};

export default RestrictedRoute;
