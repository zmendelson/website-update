import './styling/home.css'
import WhiteLogo from "../assets/WhiteLogo.svg"
import BlackLogo from "../assets/BlackLogo.svg"
import MLogoOne from "../assets/MLogoOne.svg"

export default function Home() {
  return (
    <div className="mendelson-website-home">
      <img src={MLogoOne} alt="Mendelson Law Firm Logo" className="home-logo" />
      <div className="mendelson-website-home-header">
        <h2>Mendelson Law Firm</h2>
        <p>EXCELLENCE WITH COMPASSION</p>
      </div>
    </div>
  )
}