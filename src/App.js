import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import React, { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import "./firebase";

import Home from "./Pages/Home";
import FirebaseLogin from "./Pages/FirebaseLogin";
import FirebaseSignup from "./Pages/FirebaseSignup";
import ResetPassword from "./Pages/ResetPassword";
import History from "./Pages/History";
import Workout from "./Pages/Workout";
import Exercises from "./Pages/Exercises";
import Measure from "./Pages/Measure";

import TabBar from "./Components/TabBar";
import Loading from "./Components/Loading";

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
        <Route path="/signup" element={<FirebaseSignup />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        {user ? (
          <>
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/" element={<Home user={user} />} />
            <Route path="/history" element={<History />} />
            <Route path="/start-workout" element={<Workout />} />
            <Route path="/exercises" element={<Exercises />} />
            <Route path="/measure" element={<Measure />} />
          </>
        ) : (
          <>
            <Route path="*" element={<Navigate to="/login" />} />
            <Route path="/login" element={<FirebaseLogin />} />
          </>
        )}
      </Routes>
      {user && <TabBar />}
    </Router>
  );
}

export default App;
