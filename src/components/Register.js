import React,{ useState} from "react";
import { Link } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
const Register = () => {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");  
  const [error, setError] = useState("");
  const { signUp } = useUserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
    const user = signUp(email,password);
    console.log("register success");
    console.log(user);
    }
    catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="register">
      <div className="register__title">Register</div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__group">
          <input
            type="email"
            placeholder="Enter your email..."
            onChange={(e) => {setEmail(e.target.value)}}
          />
        </div>
        <div className="form__group">
          <input
            type="password"
            placeholder="Enter your password..."
            onChange={(e) => {setPassword(e.target.value)}}
          />
        </div>
        <button className="register__submit" type="submit">Đăng ký</button>
      </form>
      <div className="register__back">
      <Link to="/login"> Back to Login Page</Link>
      </div>
    </div>
  );
};

export default Register;
