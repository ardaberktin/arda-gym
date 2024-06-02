import React, { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import LoginPage, {
  Username,
  Password,
  Submit,
  Title,
  Logo,
  Footer,
} from "@react-login-page/page6";
import "./FirebaseLogin.css";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  const auth = getAuth();

  const handleResetPassword = async (event) => {
    event.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Password reset email sent!");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleEmailChange = (e) => setEmail(e.target.value);

  return (
    <div className="login-container">
      <h1 className="big-title">Arda Gym</h1>
      <div className="login-input">
        <LoginPage onSubmit={handleResetPassword}>
          <Logo>🔒</Logo>
          <Title>Reset Password</Title>
          <Username
            label="Email:"
            name="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <Password visible={false} />
          <Submit onClick={handleResetPassword}>Send Reset Email</Submit>
          {message && <p style={{ color: "green" }}>{message}</p>}
          {error && <p style={{ color: "red" }}>{error}</p>}
          <Footer className="login-footer">
            Remember your password? <a href="/login">Log in</a>
          </Footer>
        </LoginPage>
      </div>
    </div>
  );
};

export default ResetPassword;
