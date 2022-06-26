import { FC } from "react";
import "../styles/Footer.scss";

const Footer: FC = () => {
    return ( <>
    <div className="footer">
        <div className="footer wrapper">
            <div className="wrapper__left"><p>johndoe</p></div>
            <div className="wrapper__right">
                <p>privacy policy</p>
                <p>terms and conditions</p>
            </div>
        </div>
    </div>
    </> );
}
 
export default Footer;