import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import Work from "./pages/Work";
import Info from "./pages/Info";
import ScrolltoTop from "./components/ScrolltoTop";
import "./App.css"

function App() {
  return (
    <div className="app-root">
    <Router>
      <Header />

      <main className="app-main">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/work" element={<Work />} />
        <Route path="/info" element={<Info />} />
      </Routes>
      </main>
      <ScrolltoTop />
      <Footer />
    </Router>
    </div>

  );
}

export default App;
