import { useRef } from "react";
import "./login.css"
import { loginCall } from "../../apiCalls";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
export default function Login() {
  const email=useRef();
  const password=useRef();
  const {isFetching,dispatch}=useContext(AuthContext);
  const handleClick=(e)=>{
    e.preventDefault();
    loginCall({email:email.current.value,password:password.current.value},dispatch);
  };
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
            <h3 className="loginLogo">SocialNetwork</h3>
            <span className="loginDesc">
                Connect with your friends around the world!!
            </span>
        </div>
        <div className="loginRight">
            <form className="loginBox" onSubmit={handleClick}>
                <input placeholder="Email" type="email" required className="loginInput" ref={email}></input>
                <input placeholder="Password" type="password" minLength={6} required className="loginInput" ref={password}></input>
                <button className="loginButton" disabled={isFetching} type="submit">Log In</button>
                <span className="loginForgot">Forgot Password?</span>
                <button className="loginRegisterButton">Create a new account</button>
            </form>
        </div>
      </div>
    </div>
  )
}
