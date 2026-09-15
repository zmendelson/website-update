import { Link } from "react-router-dom";
import '../pages/styling/navbar.css'

interface NavBarProps {
  handleTabChange: (tab: string) => void;
}

export default function NavBar({ handleTabChange }: NavBarProps) {

  return (
    <div className="navbar-container">
        <nav>
            <Link to="/" onClick={() => {
                handleTabChange("");
            }}>
                Home
            </Link>
            <Link to="/about" onClick={() => {
                handleTabChange("about");
            }}>
                About
            </Link>
            <Link to="/practice-areas" onClick={() => {
                handleTabChange("practice-areas")
            }}>
            Practice Areas
            </Link>
            <Link to="/contact" onClick={() => {
                handleTabChange("contact");
            }}>
                Contact
            </Link>
        </nav>
    </div>
  )
}