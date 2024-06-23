import React, { useState } from "react";
import { Container, Button, Heading, Form, NavLink, ButtonAndNavLinkBox } from "./RegistrationFormElement";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faCheckCircle);

const RegistrationForm = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showErrorMessageUserName, setShowErrorMessageUserName] = useState('');
  const [showErrorMessageEmail, setShowErrorMessageEmail] = useState('');
  const [showErrorMessagePassword, setShowErrorMessagePassword] = useState('');
  const [showErrorMessageConfirmPassword, setShowErrorMessageConfirmPassword] = useState('');
  const [showErrorMessageConfirm, setShowErrorMessageConfirm] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const navigate = useNavigate();

  const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  const passwordRegex = /^(?=.*[A-Z]).{8,}$/;

  const pressedRegister = (e) => {
    e.preventDefault();

    let hasError = false;

    if (!username) {
      setShowErrorMessageUserName('Username is required');
      hasError = true;
    } else {
      setShowErrorMessageUserName('');
    }

    if (!email) {
      setShowErrorMessageEmail('Email is required');
      hasError = true;
    } else if (!emailRegex.test(email)) {
      setShowErrorMessageEmail('Email must be a valid Gmail address');
      hasError = true;
    } else {
      setShowErrorMessageEmail('');
    }

    if (!password) {
      setShowErrorMessagePassword('Password is required');
      hasError = true;
    } else if (!passwordRegex.test(password)) {
      setShowErrorMessagePassword('Password must be at least 8 characters long and contain at least one uppercase letter');
      hasError = true;
    } else {
      setShowErrorMessagePassword('');
    }

    if (!confirmPassword) {
      setShowErrorMessageConfirmPassword('Confirm password is required');
      hasError = true;
    } else {
      setShowErrorMessageConfirmPassword('');
    }

    if (password !== confirmPassword) {
      setShowErrorMessageConfirm('Password and confirmation password do not match');
      hasError = true;
    } else {
      setShowErrorMessageConfirm('');
    }

    if (hasError) {
      return;
    }

    Axios.post("http://localhost:8080/login/signup", {
      username: username,
      email: email,
      password: password,
    })
      .then((response) => {
        setSuccessMessage('Registration successful! Redirecting to login page...');
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      })
      .catch((error) => {
        console.log(error.data);
      });
  };

  return (
    <div className="flex pt-20 pb-20">
      <Container>
        <Heading>
          <h2 className="text-white text-center text-3xl">User Registration</h2>
        </Heading>
        {successMessage && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={() => setSuccessMessage('')}>&times;</span>
              <FontAwesomeIcon icon="check-circle" size="3x" style={{ color: 'green' }} />
              <p>{successMessage}</p>
            </div>
          </div>
        )}
        <Form className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <label className="p-0">Name</label>
            <input
              className="h-10 pl-3 border border-gray-950 rounded-md"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => {
                setUserName(e.target.value);
                setShowErrorMessageUserName('');
              }}
            />
          </div>
          {showErrorMessageUserName && <div style={{ color: 'red' }}>{showErrorMessageUserName}</div>}
          <div className="flex flex-col gap-1">
            <label className="p-0">Email</label>
            <input
              className="h-10 pl-3 border border-gray-950 rounded-md"
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setShowErrorMessageEmail('');
              }}
            />
          </div>
          {showErrorMessageEmail && <div style={{ color: 'red' }}>{showErrorMessageEmail}</div>}
          <div className="flex flex-col gap-1">
            <label className="p-0">Password</label>
            <input
              className="h-10 pl-3 border border-gray-950 rounded-md"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setShowErrorMessagePassword('');
              }}
            />
          </div>
          {showErrorMessagePassword && <div style={{ color: 'red' }}>{showErrorMessagePassword}</div>}
          <div className="flex flex-col gap-1">
            <label className="p-0">Confirm Password</label>
            <input
              className="h-10 pl-3 border border-gray-950 rounded-md"
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                setShowErrorMessageConfirmPassword('');
                setShowErrorMessageConfirm('');
              }}
            />
          </div>
          {showErrorMessageConfirmPassword && <div style={{ color: 'red' }}>{showErrorMessageConfirmPassword}</div>}
          {showErrorMessageConfirm && <div style={{ color: 'red' }}>{showErrorMessageConfirm}</div>}
          <ButtonAndNavLinkBox className="flex flex-row justify-center">
            <Button onClick={pressedRegister}>Sign Up</Button>
            <NavLink to="/login" activeStyle>
              Already Registered?
            </NavLink>
          </ButtonAndNavLinkBox>
        </Form>
      </Container>

      {/* Modal Styles */}
      <style jsx>{`
        .modal {
          display: flex;
          justify-content: center;
          align-items: center;
          position: fixed;
          z-index: 1000;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          overflow: auto;
          background-color: rgba(0, 0, 0, 0.5);
        }
        .modal-content {
          background-color: #fff;
          padding: 20px;
          border-radius: 10px;
          text-align: center;
          max-width: 500px;
          width: 80%;
          margin: auto;
        }
        .close {
          color: #aaa;
          float: right;
          font-size: 28px;
          font-weight: bold;
          cursor: pointer;
        }
        .close:hover,
        .close:focus {
          color: black;
          text-decoration: none;
        }
      `}</style>
    </div>
  );
};

export default RegistrationForm;
