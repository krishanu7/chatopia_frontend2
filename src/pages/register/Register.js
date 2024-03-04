import axios from "axios";
import { useRef } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";  
import { URL } from "../../url.js";

const Register = () => {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordAgain = useRef();
    const navigate = useNavigate(); 

    const handleRegisterClick = async (e) => {
        e.preventDefault();
        if (passwordAgain.current.value !== password.current.value) {
          passwordAgain.current.setCustomValidity("Passwords don't match!");
        } else {
          const user = {
            username: username.current.value,
            email: email.current.value,
            password: password.current.value,
          };
          try {
            await axios.post(URL+"/api/auth/register", user)
            navigate("/login"); 
          } catch (err) {
            console.log(err);
          }
        }
    };

    const handleLoginClick = () => {
        navigate("/login");
    };

    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Chatopia</h3>
                    <span className="loginDesc">
                        Connect with friends and the world around you on Chatopia.
                    </span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleRegisterClick}>
                        <input
                            placeholder="Username"
                            required
                            ref={username}
                            className="loginInput"
                        />
                        <input
                            placeholder="Email"
                            required
                            ref={email}
                            className="loginInput"
                            type="email"
                        />
                        <input
                            placeholder="Password"
                            required
                            ref={password}
                            className="loginInput"
                            type="password"
                            minLength="6"
                        />
                        <input
                            placeholder="Password Again"
                            required
                            ref={passwordAgain}
                            className="loginInput"
                            type="password"
                        />
                        <button className="loginButton" type="submit">
                            Sign Up
                        </button>
                        <button className="loginRegisterButton" onClick={handleLoginClick}>
                            Log into Account
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
