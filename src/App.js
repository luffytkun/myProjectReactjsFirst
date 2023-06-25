import "./App.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// import DefaultLayout from "./layouts";
import Home from "./pages/Home";
import Layout from "./layouts/DefaultLayout";
import Login from "./pages/Auth/login.js";

function App() {
  return (
    <Router>
      <div className="App box-border">
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/login"
            element={
              <Layout>
                <Login />
              </Layout>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
