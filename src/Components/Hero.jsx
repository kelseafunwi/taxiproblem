const Hero = () => {
    return (
        <div className="bg-yellow-500">
        <div className="text-center py-16 px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-extrabold tracking-tight text-black sm:text-5xl md:text-6xl">
            <span className="block xl:inline">Your Taxi,</span>
            <span className="block text-black xl:inline">Your Destination</span>
            </h2>
            <p className="mt-3 max-w-md mx-auto text-base text-black sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Experience the best way to get around the city. Fast, reliable, and affordable taxi service at your fingertips.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
                <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-yellow-200 md:py-4 md:text-lg md:px-10">
                Get Started
                </a>
            </div>
            </div>
        </div>
        </div>
    );
};

export default Hero;
