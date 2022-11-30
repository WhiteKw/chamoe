import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AuthSigned(props) {
  const navigate = useNavigate();

  useEffect(() => {
    const authCheck = async () => {
      if (props.isLoggedIn) {
        return props.element;
      } else {
        navigate("/login");
      }
    }

    authCheck();
  }, []);
}

export default AuthSigned;
