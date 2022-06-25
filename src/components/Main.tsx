import { FC } from "react";
import "../styles/main.scss";
import landingPhoto from "../assets/LandingPhoto.jpg";
import landingIcon from '../assets/LandingIcon.svg';
import continueIcon from '../assets/LandingContinueIcon.svg';
import Portfolio from "./Portfolio";

 
const Main: FC = () => {
    return (
    <>
        <div className="landing">
            <div className="landing__title">
                Minimal Portfolio Header Here
            </div>
            <div className="landing__icon">
                <img alt="icon in the middle" src={landingIcon} />
            </div>
            <div className="landing_photo">
                <img alt="langin photo" src={landingPhoto} />
            </div>
        </div>
        <div className="continue_icon">
            <img alt="continue icon" src={continueIcon}/>
        </div>
        <div className="description">
            <p>I’m John Surname, a senior UI/UX designer basded in New York, USA. I passionate to build mobile UI designs.</p>
        </div>
        <div className="continue_icon">
            <img alt="continue icon" src={continueIcon}/>
        </div>
        <Portfolio />
    </>
    );
}
 
export default Main;