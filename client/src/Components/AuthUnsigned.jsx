import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AuthUnsigned(props) {
  const navigate = useNavigate();

  useEffect(() => {
    const authCheck = async () => {
      if (!props.isLoggedIn) {
        return props.element;
      } else {
        navigate("/");
      }
    }

    authCheck();
  }, []);
  
}

export default AuthUnsigned;
