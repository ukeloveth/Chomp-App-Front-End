import HomePage from "./pages/HomePage/HomePage"
import './App.css';
import Navbar from "./component/Navbar/Navbar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Footer from "./component/footer/Footer";
import SignUp from "./pages/signup/SignUp";

function App() {

  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App