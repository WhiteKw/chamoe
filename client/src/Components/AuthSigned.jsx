import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AuthSigned(props) {
  const navigate = useNavigate();

  useEffect(() => {
    if (props.isLoggedIn) {
      return props.element;
    } else {
      navigate("/login");
    }
  }, []);
}

export default AuthSigned;
