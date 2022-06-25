import { FC } from "react";
import "../styles/navbar.scss";

 
const Navbar: FC = () => {
    return ( <>
    <nav className="navbar">
        <div className="navbar__wrapper">
            <div className="navbar__left">
                <div className="navbar__link">johndoe</div>
            </div>
            <div className="navbar__right">
                <ul className="navbar__right">
                    <li className="navbar__link">About</li>
                    <li className="navbar__link">Home</li>
                    <li className="navbar__link">Projects</li>
                    <li className="navbar__link">Contacts</li>
                </ul>
            </div>
        </div>
    </nav>
    </> );
}
 
export default Navbar;