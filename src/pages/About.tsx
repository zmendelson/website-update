import "./styling/about.css"
import DadHeadshot from "../assets/DadHeadhshot.jpg"

export default function About() {
  const aboutText = "With a distinguished career spanning decades, Mr. Mendelson brings a powerful combination of legal expertise, courtroom success, and professional recognition to every client served. A graduate of the University of Florida, Mr. Mendelson earned a Bachelor of Science in Finance in 1989, followed by a Juris Doctor (with honors) in 1992. Since being admitted to the Michigan Bar in 1995, Mr. Mendelson has built a reputation as a formidable advocate in both commercial litigation and family law. Over the course of this career, Mr. Mendelson has secured multiple million-dollar jury verdicts, including one of the most notable outcomes in the nation—in July 2009, achieving the 7th largest verdict in the United States that year. This level of success reflects not only deep legal knowledge, but also a relentless commitment to achieving results for clients. Mr. Mendelson’s excellence has been consistently recognized by peers and industry authorities alike. They have been honored in Best Lawyers in America and the Michigan edition of Super Lawyers for their work in both commercial litigation and family law. Additionally, Mr. Mendelson has earned the prestigious AV Preeminent rating from Martindale-Hubbell for 19 consecutive years—the highest possible distinction for legal ability and ethical standards. Dedicated, accomplished, and highly respected, Mr. Mendelson continues to provide exceptional legal representation grounded in experience, integrity, and results."
  return (
    <div className="mendelson-website-about">
      <div className="about-text">
        <h1>About David Mendelson</h1>
        <p>{aboutText}</p>
      </div>
      <img src={DadHeadshot} alt="Headshot" className="headshot" />
    </div>
  )
}