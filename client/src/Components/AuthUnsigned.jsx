import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AuthUnsigned(props) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!props.isLoggedIn) {
      return props.element;
    } else {
      navigate("/");
    }
  }, []);
}

export default AuthUnsigned;
