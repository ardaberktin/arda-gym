import React, { useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";
import LoginPage, {
  Username,
  Password,
  Submit,
  Title,
  Logo,
  Footer,
} from "@react-login-page/page6";
import "./FirebaseLogin.css";

const FirebaseAuth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const auth = getAuth();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("User signed in:", user);
      // Redirect or perform any other necessary actions
    } catch (error) {
      setError(error.message);
    }
  };

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  return (
    <div className="login-container">
      <h1 className="big-title">Arda Gym</h1>
      <div className="login-input">
        <LoginPage onSubmit={handleLogin}>
          <Logo>🔒</Logo>
          <Title>Log in</Title>
          <Username visible={false} />
          <Username
            label="Email:"
            name="email"
            value={email}
            onChange={handleEmailChange}
            required
            placeholder="Email"
            keyname="email"
            index={0}
          />
          {/* <Username keyname="checkbox" type="checkbox" index={2}></Username> */}
          <Password visible={false} />
          <Password
            label="Password:"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            required
            index={1}
          />
          <Username
            keyname="checkbox"
            type="checkbox"
            index={3}
            placeholder="修改了 name 字段"
            style={{ width: "auto" }}
          >
            <div
              style={{
                fontSize: 14,
                display: "flex",
                justifyContent: "left",
                alignItems: "left",
                flex: 1,
              }}
            >
              <div>Remember Me</div>
            </div>
          </Username>
          <Submit onClick={handleLogin}>Log in</Submit>
          <Footer className="login-footer">
            {error && <p style={{ color: "red" }}>{error}</p>}
            Not a member? <a href="/signup">Sign up now</a> <br></br>
            Forgot your password?{" "}
            <a href="/reset-password">Reset your password</a>
          </Footer>
        </LoginPage>
      </div>
    </div>
  );
};

export default FirebaseAuth;
