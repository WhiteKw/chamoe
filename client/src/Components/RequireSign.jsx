import { useLocation, Navigate, Outlet } from "react-router-dom";

const RequireSign = (props) => {
  const location = useLocation();

  return props.isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate to="/signin" state={{ from: location }} replace />
  );
};

export default RequireSign;
