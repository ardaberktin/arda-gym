import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import LoginPage, {
  Username,
  Password,
  Submit,
  Title,
  Logo,
  Footer,
} from "@react-login-page/page6";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const auth = getAuth();

  const handleSignup = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("User signed up:", user);
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
        <LoginPage onSubmit={handleSignup}>
          <Logo>🔒</Logo>
          <Title>Sign Up</Title>
          <Username
            label="Email:"
            name="email"
            value={email}
            onChange={handleEmailChange}
            required
            placeholder="Email"
          />
          <Password visible={false} />
          <Password
            keyname="first"
            index={1}
            label="Password:"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <Password
            keyname="second"
            index={2}
            label="Confirm Password:"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <Submit onClick={handleSignup}>Sign Up</Submit>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <Footer className="login-footer">
            Already have an account? <a href="/login">Log in</a>
          </Footer>
        </LoginPage>
      </div>
    </div>
  );
};

export default Signup;
