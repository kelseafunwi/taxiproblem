
import "./Sign.css";

function Login() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-center h-screen ">
        <div className="w-64 h-64 rounded-full shadow-lg">
          <img src="logo.png" alt="Logo" className="w-32 h-32 object-cover" />
        </div>
        <div className="text-white text-xl font-bold mt-4 mb-8">
          Welcome to our website!
        </div>
      </div>
      <form className="mt-16">
        <input
          type="email"
          placeholder="Email"
          className="border border-gray-300 rounded px-4 py-2 mt-2"
        />
        <input
          type="password"
          placeholder="Password"
          className="border border-gray-300 rounded px-4 py-2 mt-2"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded mt-4"
        >
          Sign up
        </button>
      </form>
    </div>
  );
}

export default Login;
