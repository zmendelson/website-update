import PracticeAreaCard from "../components/PracticeAreaCard";
import FamilyLawLogo from "../assets/FamilyLawLogo.svg"
import CommercialLitLogo from "../assets/CommercialLitLogo.svg"
import ArbitrationLogo from "../assets/ArbitrationLogo.svg"
import './styling/practice-areas.css'

export default function PracticeAreas() {
    return (
        <div className="mendelson-website-practice-areas">
            <div className="practice-area-cards">
                <PracticeAreaCard icon={FamilyLawLogo} />
                <PracticeAreaCard icon={CommercialLitLogo} />
                <PracticeAreaCard icon={ArbitrationLogo} />
            </div>
        </div>
    )
}