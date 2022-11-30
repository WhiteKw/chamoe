import { useLocation, Navigate, Outlet } from "react-router-dom";

const RequireUnsign = (props) => {
  const location = useLocation();

  return !props.isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};

export default RequireUnsign;
