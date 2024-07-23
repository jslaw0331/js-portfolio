import { Link } from "react-router-dom"
import { arrow } from '../assets/icons/'

const InfoBox = ({ text, link, btnText }) => (
    <div className="info-box">
        <p className="font-medium sm:text-xl text-center">{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn">
            {btnText}
            <img src={arrow} className="w-4 h-4 object-contain" />
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
            Hi, I am <span className="font-semibold">Jia Sheng</span> 😁
            <br />
            A Frontend Developer from Johor.
        </h1>
    ),
    2: (
        <InfoBox
            text="Worked with many companies and picked up many skills along the way"
            link="/about"
            btnText="Learn more"
        />
    ),
    3: (
        <InfoBox
            text="Successfully created and launched multiple websites over the years, all of which continue to run smoothly and efficiently."
            link="/projects"
            btnText="Visit my portfolio"
        />
    ),
    4: (
        <InfoBox
            text="If you have any questions, opportunities, or just want to say hi, feel free to reach out! I'd love to hear from you."
            link="/contact"
            btnText="Let's talk"
        />
    ),
}

const HomeInfo = ({ currentStage }) => {
    return renderContent[currentStage] || null
}

export default HomeInfo