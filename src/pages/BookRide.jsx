import { useState } from 'react';
import { Link } from 'react-router-dom';

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
        <div className="bg-yellow-500 min-h-screen">
            <div className='flex md:columns-3 gap-x-3 min-h-[100px]'>
                <div className='bg-white w-full shadow-md text-center'> 
                    <h1 className='text-[20px] font-semibold'>
                        Number of Schedule rides
                    </h1>
                    <h1 className='text-[40px] font-bold'>5</h1>
                </div>  
                <div className='bg-white w-full shadow-md text-center'> 
                    <h1 className='text-[20px] font-semibold'>
                        <Link to="/">Walet amount</Link>
                    </h1>
                    <h1 className='text-[40px] font-bold'>5000</h1>
                </div>   
                <div className='bg-white w-full shadow-md text-center'> 
                    <h1 className='text-[20px] font-semibold'>
                        <Link to="/">Previous Transactions</Link>
                    </h1>
                    <ol>
                        <li>Went to bakweri town yesterday</li>
                    </ol>
                </div>  
            </div>

            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full">
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
