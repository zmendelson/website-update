import { Link } from "react-router-dom";
import { useState } from "react";
import '../pages/styling/navbar.css'

interface NavBarProps {
  handleTabChange: (tab: string) => void;
}

export default function NavBar({ handleTabChange }: NavBarProps) {
  const [activeLink, setActiveLink] = useState("/");

  return (
    <div className="navbar-container">
        <nav>
            <Link to="/" onClick={() => {
                setActiveLink("/");
                handleTabChange("");
            }}>
                Home
            </Link>
            <Link to="/about" onClick={() => {
                setActiveLink("/about");
                handleTabChange("about");
            }}>
                About
            </Link>
            <Link to="/practice-areas" onClick={() => {
                setActiveLink("/practice-areas");
                handleTabChange("practice-areas")
            }}>
            Practice Areas
            </Link>
            <Link to="/contact" onClick={() => {
                setActiveLink("/contact");
                handleTabChange("contact");
            }}>
                Contact
            </Link>
        </nav>
    </div>
  )
}