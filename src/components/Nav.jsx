import { NavLink } from "react-router-dom";
import '../index.css'
const Nav = () => {
    return (
        <div className="flex justify-between mx-auto max-w-5xl items-center mt-10 ">
            <div>
                <img src="https://i.ibb.co/4SrwdFC/Logo.png" alt="" />
            </div>
            <div className="flex gap-5 list-none">
                <li><NavLink to={'/'}>Home</NavLink></li>
                <li><NavLink to={'/donation'}>Donation</NavLink></li>
                <li><NavLink to={'/state'}>Statistics</NavLink></li>
            </div>
        </div>
    );
};

export default Nav;