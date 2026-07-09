import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Reviews from "./components/Reviews";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navigation Header */}
        <Header />

        {/* Content Area */}
        <main className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/reviews" element={<Reviews />} />
            {/* Catch all / fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Brand Footer */}
        <Footer />
      </div>
    </Router>
  );
}
