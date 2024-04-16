import { useState } from 'react';
import { Link } from 'react-router-dom';
import { close, logo, menu, Clogo } from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <nav className='w-full flex py-6 justify-between items-center navbar relative'>
            <Link to="/"><img src={Clogo} alt='Conatix' className='w-[153px] h-[42px]' /></Link>

            <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
                <li className="nav-item">
                        <a href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a href="/Product">Product</a>
                    <div className="dropdown-content">
                        <a href="/Differentiation">Differentiation</a>
                        <a href="#">Malware Detector</a>
                        <a href="#">Ransomware Blocker</a>
                        <a href="#">Insider Fraud Detection Wireless</a>
                        <a href="#">Insider Fraud Detection Enterprise</a>
                    </div>
                </li>
                <li className="nav-item">
                    <a href="/Company">Company</a>
                    <div className="dropdown-content">
                        <a href="#">Awards</a>
                        <a href="#">Team</a>
                        <a href="#">Careers</a>
                        <a href="#">Locations</a>
                        <a href="#">Partners</a>
                    </div>
                </li>
                <li className="nav-item">
                    <a href="#">Vision</a>
                    <div className="dropdown-content">
                        <a href="/Mascot">Mascot Logo</a>
                        <a href="#">Values</a>
                    </div>
                </li>
                <li className="nav-item">
                    <a href="#">Interact</a>
                    <div className="dropdown-content">
                        <Link to="/News">News</Link>
                        <a href="/Mascot">Contact</a>
                        <a href="#">Support</a>
                        <a href="#">Shop</a>
                    </div>
                </li>
            </ul>

            <div className='sm:hidden flex flex-1 justify-end item-center relative'>
                <img src={toggle ? close : menu} alt='menu' className='w-[34px] h-[34px] object-contain' onClick={() => setToggle((prev) => !prev)} />
                <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-10`}>
                    <ul className='list-none flex flex-col justify-end items-center flex-1'>
                        {navLinks.map((nav, index) => (
                            <li
                                key={nav.id}
                                className={`font-poppins font-normal cursor-pointer text-[16px] cnavtext ${index == navLinks.length - 1 ? 'mr-0' : 'mb-4'}`}
                            >
                                <Link to={`/${nav.id}`}>
                                    {nav.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
