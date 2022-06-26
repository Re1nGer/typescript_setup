import { FC } from "react";
import "../styles/socials.scss";


 
const Socials: FC = () => {
    return (<>
    <div className="socials">
        <div className="socials__title"><p>Contact</p></div>
        <div className="socials__subtitle"><p>contact@yourwebsite.com</p></div>
    </div>
    <div className="wrapper">
        <div className="wrapper__link">linkedin</div>
        <div className="wrapper__link">drabble</div>
        <div className="wrapper__link">behance</div>
        <div className="wrapper__link">twitter</div>
        <div className="wrapper__link">instagram</div>
    </div>
    </>);
}

 
export default Socials;
