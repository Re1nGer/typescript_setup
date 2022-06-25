import { FC } from "react";
import Navbar from "./Navbar";
import { Outlet } from 'react-router-dom';
import "../styles/Layout.scss";
import Footer from "./Footer";

const Layout: FC = () => {
    return (<>
    <div className="layout">
        <Navbar />
        <Outlet />
        <Footer />
    </div>
    
    </>);
}
 
export default Layout;