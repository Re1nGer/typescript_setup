import { FC } from "react";
import "../styles/portfolio.scss";
import firstImage from '../assets/Portfolio_1.png';
import secondImage from '../assets/Portfolio_2.png';
import thirdImage from '../assets/Portfolio_3.png';
import fourthImage from '../assets/Portfolio_4.png';
import continueIcon from '../assets/LandingContinueIcon.svg';

const Portfolio: FC = () => {
    return (
        <>
        <div className="portfolio">
            <div className="portfolio__title">Portfolio</div>
            <div className="portfolio__right__image"><img alt="first" src={firstImage} /></div>
            <div className="portfolio__left__image"><img alt="second" src={secondImage} /></div>
            <div className="portfolio__right__image"><img alt="third" src={fourthImage} /></div>
            <div className="portfolio__last__image"><img alt="fourth" src={thirdImage} /></div>
            <div className="portfolio__icon"><img src={continueIcon} alt="continue" /></div>
        </div>
        </> 
    );
}
 
export default Portfolio;