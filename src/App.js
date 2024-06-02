import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import React, { useState, useEffect } from "react";
import Home from "./Pages/Home";
import FirebaseLogin from "./Pages/FirebaseLogin";
import FirebaseSignup from "./Pages/FirebaseSignup";
import ResetPassword from "./Pages/ResetPassword";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import TabBar from "./Components/TabBar";
import Loading from "./Components/Loading";
import "./firebase";

const auth = getAuth();

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);

      //slow down the loading screen to let users register it is a loading screen.
      setTimeout(() => {
        setLoading(false); // Once authentication state is checked, set loading to false
      }, 250);
    });
    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    ); // Show loading indicator while checking authentication
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={user ? <Home user={user} /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={user ? <Navigate to="/" /> : <FirebaseLogin />}
        />
        <Route path="/signup" element={<FirebaseSignup />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
      {user && <TabBar />}
    </Router>
  );
}

export default App;
