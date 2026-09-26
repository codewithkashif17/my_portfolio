import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import SplashScreen from "./SplashScreen.jsx";
import "./index.css";

function Root() {
  const [booting, setBooting] = useState(true);
  const [reveal, setReveal] = useState(false);

  // when splash finishes, unmount it and trigger the portfolio's
  // entrance animation on the very next frame
  const handleFinish = () => {
    setBooting(false);
    requestAnimationFrame(() => setReveal(true));
  };

  return (
    <>
      {booting && (
        // Uses the placeholder logo by default. To show your own photo,
        // either edit the import at the top of SplashScreen.jsx, or pass
        // logoSrc as a prop here, e.g. logoSrc="/my-photo.jpg" if the
        // photo is placed directly in the /public folder.
        <SplashScreen
          onFinish={handleFinish}
          name="Kashif Mehmood"
          role="Software Engineer"
        />
      )}
      {!booting && (
        <div className={`app-reveal ${reveal ? "app-reveal-in" : ""}`}>
          <App />
        </div>
      )}
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
