import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";


const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }
    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/blog'>Blog</Link> </li>
        {user?.email ? <>
            <li><Link to='/orders'>All toys</Link> </li>
            <li><button onClick={handleLogOut}>Log Out</button></li>
            <li> <img src={user.photo} alt="" /> </li>
        </>
            : <li><Link to='/login'>Login</Link></li>
        }

    </>
    return (
        <div className="navbar bg-base-100 h-28 mb-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-xl">
                    <img className="rounded-xl" width={100} src="https://i.ibb.co/W0y4m5B/kiddos-logo-pichi.jpg" alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn btn-outline btn-accent">Get Info</button>
            </div>
        </div>
    );
};

export default NavBar;