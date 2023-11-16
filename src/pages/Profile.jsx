import { FaCar, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

function ProfilePage() {
    // Sample data for the taxi driver
    const driver = {
        name: 'John Doe',
        details: 'Friendly and reliable driver with 5 years of experience',
        rating: 4.5,
        image: 'https://i.imgur.com/9XxZ8wL.jpg',
        car: {
        model: 'Toyota Corolla',
        color: 'Blue',
        plate: 'ABC 123',
        image: 'https://i.imgur.com/1W0QkQv.jpg',
        },
        location: 'Buea, Southwest, Cameroon',
        availability: [
        { day: 'Monday', time: '8:00 AM - 5:00 PM' },
        { day: 'Tuesday', time: '8:00 AM - 5:00 PM' },
        { day: 'Wednesday', time: '8:00 AM - 5:00 PM' },
        { day: 'Thursday', time: '8:00 AM - 5:00 PM' },
        { day: 'Friday', time: '8:00 AM - 5:00 PM' },
        { day: 'Saturday', time: '10:00 AM - 3:00 PM' },
        { day: 'Sunday', time: 'Closed' },
        ],
    };

    return (
        <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-center">
            {/* Profile section */}
            <div className="md:w-1/3 md:mr-8 mb-4 md:mb-0">
            <img
                src={driver.image}
                alt="Driver"
                className="w-full h-full rounded-lg object-cover"
            />
            <div className="mt-4 flex items-center justify-center">
                <span className="text-lg font-bold mr-2">{driver.rating}</span>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-yellow-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15.354l-3.646 1.914.701-4.08-2.954-2.878 4.12-.598L12 5.5l1.78 3.612 4.12.598-2.954 2.878.701 4.08L12 15.354z"
                />
                </svg>
            </div>
            </div>
            {/* Name and details section */}
            <div className="md:w-2/3">
            <h1 className="text-3xl font-bold text-center md:text-left">
                {driver.name}
            </h1>
            <p className="text-lg text-gray-600 text-center md:text-left mt-2">
                {driver.details}
            </p>
            {/* Years of experience section */}
            <div className="mt-4 flex items-center justify-center md:justify-start">
                <FaCar className="h-6 w-6 text-blue-500 mr-2" />
                <span className="text-lg font-semibold">5 years of experience</span>
            </div>
            {/* Picture of his ride section */}
            <div className="mt-4">
                <h2 className="text-2xl font-bold text-center md:text-left">
                My ride
                </h2>
                <div className="flex flex-col md:flex-row items-center justify-center md:justify-start mt-2">
                <img
                    src={driver.car.image}
                    alt="Car"
                    className="w-1/2 h-1/2 md:w-1/4 md:h-1/4 rounded-lg object-cover mr-4"
                />
                <div className="flex flex-col">
                    <span className="text-lg font-semibold">
                    Model: {driver.car.model}
                    </span>
                    <span className="text-lg font-semibold">
                    Color: {driver.car.color}
                    </span>
                    <span className="text-lg font-semibold">
                    Plate: {driver.car.plate}
                    </span>
                </div>
                </div>
            </div>
            {/* Area of location section */}
            <div className="mt-4 flex items-center justify-center md:justify-start">
                <FaMapMarkerAlt className="h-6 w-6 text-red-500 mr-2" />
                <span className="text-lg font-semibold">
                Area of location: {driver.location}
                </span>
            </div>
            {/* Availability section */}
            <div className="mt-4">
                <h2 className="text-2xl font-bold text-center md:text-left">
                Availability
                </h2>
                <div className="mt-2 grid grid-cols-2 gap-4">
                {driver.availability.map((item) => (
                    <div
                    key={item.day}
                    className="flex items-center justify-between bg-gray-100 p-4 rounded-lg"
                    >
                    <span className="text-lg font-semibold">{item.day}</span>
                    <div className="flex items-center">
                        <FaClock className="h-6 w-6 text-green-500 mr-2" />
                        <span className="text-lg font-semibold">{item.time}</span>
                    </div>
                    </div>
                ))}
                </div>
            </div>
            </div>
        </div>
        </div>
    );
}

export default ProfilePage;
