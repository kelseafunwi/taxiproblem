import { useState } from 'react';

const BookRide = () => {
    const [pickup, setPickup] = useState('');
    const [destination, setDestination] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission here
    };

    return (
        <div className="bg-yellow-500 min-h-screen flex items-center justify-center">
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
            <h2 className="text-2xl mb-4">Book a Ride</h2>
            <div className="mb-4">
            <label className="block mb-2">Pickup Location</label>
            <input type="text" value={pickup} onChange={(e) => setPickup(e.target.value)} className="w-full p-2 border rounded" />
            </div>
            <div className="mb-4">
            <label className="block mb-2">Destination</label>
            <input type="text" value={destination} onChange={(e) => setDestination(e.target.value)} className="w-full p-2 border rounded" />
            </div>
            <div className="mb-4">
            <label className="block mb-2">Date</label>
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full p-2 border rounded" />
            </div>
            <div className="mb-4">
            <label className="block mb-2">Time</label>
            <input type="time" value={time} onChange={(e) => setTime(e.target.value)} className="w-full p-2 border rounded" />
            </div>
            <button type="submit" className="w-full p-2 bg-yellow-500 text-white rounded">Book Now</button>
        </form>
        </div>
    );
};

export default BookRide;
