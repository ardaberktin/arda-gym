// Home.js
import React from "react";
import { getAuth, signOut } from "firebase/auth";
import "../App.css";

function Home({ user }) {
  const auth = getAuth();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("User signed out");
      })
      .catch((error) => {
        console.error("Error signing out: ", error);
      });
  };

  return (
    <div>
      <h1 style={{ color: "white", padding: 20 }}>
        Welcome, {user.displayName || user.email}!
      </h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Home;
