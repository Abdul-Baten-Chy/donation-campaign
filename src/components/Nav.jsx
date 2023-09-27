import { NavLink } from "react-router-dom";
import '../index.css'
const Nav = () => {
    return (
        <div className="flex flex-col md:flex-row lg:flex-row justify-between mx-auto max-w-[1300px] items-center mt-10 ">
            <div>
                <img src="https://i.ibb.co/4SrwdFC/Logo.png" alt="" />
            </div>
            <div className="flex  gap-5 list-none">
                <li><NavLink to={'/'}>Home</NavLink></li>
                <li><NavLink to={'/donation'}>Donation</NavLink></li>
                <li><NavLink to={'/state'}>Statistics</NavLink></li>
            </div>
        </div>
    );
};

export default Nav;