import { useState } from 'react'
import '../pages/styling/practice-area-card.css'

interface PracticeAreaCardProps {
    cardTitle?: string,
    icon: string
}

export default function PracticeAreaCard({cardTitle, icon}: PracticeAreaCardProps) {
    const [cardIsFlipped, setCardIsFlipped] = useState(false);
    return (
        <div className="practice-area-card-container" onClick={() => setCardIsFlipped(!cardIsFlipped)}>
            <div className={`practice-area-card ${cardIsFlipped ? "flipped" : ""}`}>
                        <div className="practice-area-card-front">
          <h2>{cardTitle}</h2>
          <img src={icon} className="practice-area-card-icon" />
        </div>

        <div className="practice-area-card-back">
          <h2>More Information</h2>
          <p>
            This is the content displayed on the back of the card.
          </p>
        </div>
            </div>

        </div>
    )
}