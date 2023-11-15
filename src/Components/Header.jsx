import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="bg-yellow-500">
            <nav className="flex items-center justify-between flex-wrap p-6">
                <div className="flex items-center flex-shrink-0 text-black mr-6">
                <span className="font-semibold text-xl tracking-tight">Your Taxi App</span>
                </div>
                <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-black border-black hover:text-yellow-500 hover:border-yellow-500">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
                </div>
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                    <Link href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4 transform hover:scale-110 transition-transform">
                    Book a Ride
                    </Link>
                    <Link href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4 transform hover:scale-110 transition-transform">
                    Our Fleet
                    </Link>
                    <Link href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4 transform hover:scale-110 transition-transform">
                    Contact Us
                    </Link>
                    <Link href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white transform hover:scale-110 transition-transform">
                    About Us
                    </Link>
                </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
