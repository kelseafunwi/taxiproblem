
import { Link } from 'react-router-dom';

// Define a component for the about page
function About() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-yellow-900">About Me</h1>
      <p className="text-lg text-gray-800">
        Hi, m John Doe, a web developer and designer based in New York.
      </p>
      <p className="text-lg text-gray-800">
        I love creating beautiful and functional websites using ReactJS and TailwindCSS.
      </p>
      <p className="text-lg text-gray-800">
        I have experience in working with various technologies such as HTML, CSS, JavaScript, Node.js, MongoDB, etc.
      </p>
      <p className="text-lg text-gray-800">
        m always eager to learn new skills and explore new challenges in the web development field.
      </p>
      <div className="grid grid-cols-2 gap-4 mt-8">
        <div className="bg-white shadow-lg rounded-lg p-4">
          <img src="/profile.jpg" alt="Profile picture" width="200" height="200" />
          <h2 className="text-xl font-bold text-yellow-900">Skills</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>ReactJS</li>
            <li>TailwindCSS</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Node.js</li>
            <li>MongoDB</li>
            {/* Add more skills as needed */}
          </ul>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-xl font-bold text-yellow-900">Projects</h2>
          <ul className="list-disc list-inside text-gray-600">
            {/* Add some project links as needed */}
          </ul>
        </div>
      </div>
      {/* Add a link to your portfolio or resume */}
      <Link to="/portfolio" className="text-blue-600 hover:text-blue-700">View Portfolio</Link>
    </div>
  );
}

export default About;
