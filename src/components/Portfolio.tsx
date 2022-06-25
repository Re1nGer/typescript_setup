import { FC } from "react";
import "../styles/portfolio.scss";
import firstImage from '../assets/Portfolio_1.png';
import secondImage from '../assets/Portfolio_2.png';
import thirdImage from '../assets/Portfolio_3.png';
import fourthImage from '../assets/Portfolio_4.png';

const Portfolio: FC = () => {
    return (
        <>
        <div className="portfolio">
            <div className="portfolio__title">Portfolio</div>
            <div className="portfolio__right__image"><img src={firstImage} /></div>
            <div className="portfolio__left__image"><img src={secondImage} /></div>
            <div className="portfolio__right__image"><img src={fourthImage} /></div>
            <div className="portfolio__last__image"><img src={thirdImage} /></div>
        </div>
        </> 
    );
}
 
export default Portfolio;