import React from "react";
import SyncIcon from "@mui/icons-material/Sync";
import "./LoadingScreen.css";

function LoadingScreen(props) {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={SyncIcon} className="App-logo" alt="logo" /> */}
        <SyncIcon className="App-logo" alt="logo" sx={{ fontSize: 80 }} />
        <p>Loading... Shouldn't take long.</p>
        <p>{props.text}</p>
      </header>
    </div>
  );
}

export default LoadingScreen;
