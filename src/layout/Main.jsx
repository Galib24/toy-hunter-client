import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/footer/Footer";
import NavBar from "../pages/Shared/Navbar/NavBar";


const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;