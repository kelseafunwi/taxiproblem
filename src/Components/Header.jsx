import {  NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="bg-yellow-500">
            <nav className="flex items-center justify-between flex-wrap p-6">
                <div className="flex items-center flex-shrink-0text-4xl font-bold text-yellow-900 mr-6">
                <span className="font-semibold text-xl tracking-tight">Your Taxi App</span>
                </div>
                <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-black border-black hover:text-yellow-500 hover:border-yellow-500">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
                </div>
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                    <NavLink to="/" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4 transform hover:scale-110 transition-transform">
                        Homepage
                    </NavLink>
                    <NavLink to="/book-ride" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4 transform hover:scale-110 transition-transform">
                    My Rides
                    </NavLink>
                    <NavLink to="/drivers" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4 transform hover:scale-110 transition-transform">
                    Drivers
                    </NavLink>
                    <NavLink to="/out-fleet" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4 transform hover:scale-110 transition-transform">
                    Our Fleet
                    </NavLink>
                    <NavLink to="/contact" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4 transform hover:scale-110 transition-transform">
                    Contact Us
                    </NavLink>
                    <NavLink to="/about" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white transform hover:scale-110 transition-transform">
                    About Us
                    </NavLink>
                </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
