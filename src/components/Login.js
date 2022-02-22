import React, { useState } from "react";
import { Link,useNavigate  } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const Login = () => {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");  
  const [error, setError] = useState("");
  const { signIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email,password);
      console.log("login success");
      alert("Đăng nhập thành công")
      navigate("/")
    }
    catch (error) {     
      setError(error.message);
    }
  };
  return (
    <div className="login">
      <div className="login__title">Login</div>
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
        <button className="login__submit" type="submit">Đăng nhập</button>
      </form>
      {error && <span className="error">{error}</span>}
      <div className="login__register">
        Do not have an account? <Link to="/register">Create account</Link>
      </div>
    </div>
  );
};

export default Login;
