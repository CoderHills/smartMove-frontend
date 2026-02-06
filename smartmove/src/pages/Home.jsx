import React from "react";
import "./Home.css";

export default function Home({ onNavigate }) {
  return (
    <div className="home">
      {/* Navbar */}
      <header className="navbar">
        <div className="nav-left">
          <div className="logo">SmartMove</div>
          <ul className="nav-links">
            <li onClick={() => onNavigate("services")}>Services</li>
            <li onClick={() => onNavigate("about")}>About</li>
            <li onClick={() => onNavigate("inventory")}>Inventory</li>
            <li onClick={() => onNavigate("find-movers")}>Find Movers</li>
            <li onClick={() => onNavigate("booking")}>Booking</li>
            <li onClick={() => onNavigate("tracking")}>Track</li>
          </ul>
        </div>

        {/* Right Navbar - Roles + Login/Signup */}
        <div className="nav-right">
          <button className="btn-role" onClick={() => onNavigate("admin")}>
            Admin
          </button>
          <button className="btn-role" onClick={() => onNavigate("mover")}>
            Mover
          </button>
          <button className="btn-link" onClick={() => onNavigate("login")}>
            Login
          </button>
          <button className="btn-primary" onClick={() => onNavigate("signup")}>
            Sign Up
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-left">
          <div className="hero-logo">SmartMove</div>
          <h1>Your Stress-Free Moving Solution</h1>
          <p>
            Professional moving services that make relocation simple, safe, and
            affordable. Get your free quote in minutes.
          </p>
          <div className="hero-actions">
            <button
              className="btn-primary"
              onClick={() => onNavigate("booking")}
            >
              Get Free Quote →
            </button>
            <button
              className="btn-secondary"
              onClick={() => onNavigate("services")}
            >
              View Services
            </button>
          </div>

          {/* Features */}
          <div className="features-cards">
            <div className="feature-card">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Fully Insured & Licensed</span>
            </div>
            <div className="feature-card">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3"
                />
              </svg>
              <span>On-Time Guarantee</span>
            </div>
            <div className="feature-card">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 7h18M3 12h18M3 17h18"
                />
              </svg>
              <span>Transparent Pricing</span>
            </div>
            <div className="feature-card">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6l2 4 4 .5-3 2 1 4-4-2-4 2 1-4-3-2L10 10 12 6z"
                />
              </svg>
              <span>5-Star Rated Service</span>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
            alt="Modern living room"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>Connect with us:</p>
        <div className="social-icons">
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
              alt="Instagram"
            />
          </a>
          <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
              alt="WhatsApp"
            />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
              alt="Facebook"
            />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
              alt="Twitter"
            />
          </a>
        </div>
      </footer>
    </div>
  );
}
