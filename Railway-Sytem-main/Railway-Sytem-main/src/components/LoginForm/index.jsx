import { Container, Heading, Form, NavLink, Button } from "./LoginFormElement";
import Axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaGooglePlusG } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [showErrorMessage, setShowErrorMessage] = useState('');

  const handleSignInUser = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios.post('http://localhost:8080/login/signin', {
        username: email,
        password: password
      });
      
      let foundUser = false;
      for (let item of response.data) {
        if (email === item.email && password === item.password) {
          foundUser = true;
          navigate("/home");
          break;
        }
      }
      
      if (!foundUser) {
        setShowErrorMessage('Wrong email or password');
      }
    } catch (error) {
      console.error('Error occurred:', error);
    }
  };

  const handleSignInAdmin = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios.post('http://localhost:8080/loginAdmin/signin', {
        username: email,
        password: password
      });
      
      let foundAdmin = false;
      for (let item of response.data) {
        if (email === item.email && password === item.password) {
          foundAdmin = true;
          navigate("/admin");
          break;
        }
      }
      
      if (!foundAdmin) {
        setShowErrorMessage('Wrong email or password');
      }
    } catch (error) {
      console.error('Error occurred:', error);
    }
  };

  return (
    <div className="flex flex-col pt-20 pr-20">
      <Container>
        <Heading>
          <h2 className="text-gray-50 text-center text-3xl">User Login</h2>
        </Heading>
        <Form className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <label className="p-0">Email</label>
            <input
              className="relative h-10 pl-3 border border-gray-950 rounded-md pr-10"
              type="text"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <MdOutlineMail
              className="mail-icon"
              style={{
                position: "absolute",
                top: "38.5%",
                left: "61%",
              }}
            />
          </div>
          <div className="relative flex flex-col gap-1">
            <label className="p-0">Password</label>
            <input
              className="h-10 pl-3 border border-gray-950 rounded-md mb-2 pr-10"
              type={!showPassword ? "password" : "text"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {showErrorMessage && <div style={{ color: 'red' }}>{showErrorMessage}</div>}
            {showPassword ? (
              <FaRegEyeSlash
                className="eye-icon"
                style={{
                  position: "absolute",
                  top: "40px",
                  left: "93%",
                }}
                onClick={() => setShowPassword(false)}
              />
            ) : (
              <FaRegEye
                className="eye-icon"
                style={{
                  position: "absolute",
                  top: "40px",
                  left: "93%",
                }}
                onClick={() => setShowPassword(true)}
              />
            )}
          </div>
          <Button
            style={{
              alignSelf: "center",
            }}
            onClick={handleSignInUser}
          >
            Sign in as User
          </Button>
          <Button
            style={{
              alignSelf: "center",
            }}
            onClick={handleSignInAdmin}
          >
            Sign in as Admin
          </Button>
          <div className="flex flex-row gap-2 justify-center">
            <div
              style={{
                width: "50%",
                height: "2px",
                backgroundColor: "#e5e5e5",
                alignSelf: "center",
              }}
            />
            <text className="text-gray-950 text-center">Or</text>
            <div
              style={{
                width: "50%",
                height: "2px",
                backgroundColor: "#e5e5e5",
                alignSelf: "center",
              }}
            />
          </div>
          <div className="flex justify-center font-thin ">
            <span>Are you new?</span>
            <NavLink
              to="/register"
              activeStyle={String(true)}
              className="text-blue-400 cursor-pointer hover:text-blue-500"
            >
              {" "}
              Create an account{" "}
            </NavLink>
          </div>
        </Form>
      </Container>
    </div>
  );
}

export default LoginForm;
