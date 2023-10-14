import React from "react";
import "../src/assets/logo.png"
import "./App.css";

function App() {
  return (
    // BEM naming convention
    <div className="app">
      {/* <h1>IG-Reels-Clone 🚀!</h1> */}

      <div className="app_top">
        {/* image at top - logo */}
      <img className="app_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png" alt=""></img>
        <h1>Reels</h1>
        {/* Reels text */}


      </div>

      <div className="app_videos">
        {/* Container of app_videos (Scrollable container) */}
      </div>
    </div>
  );
}

export default App;
