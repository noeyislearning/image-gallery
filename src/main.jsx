import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"

/** Stylesheets */
import "./assets/css/globals.css"

/** Components */
import Footer from "./components/layouts/footer/Footer.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="tracking-tighter antialiased">
      <App />
      <Footer />
    </div>
  </React.StrictMode>,
)
