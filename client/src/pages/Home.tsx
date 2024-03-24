import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-700 text-white min-h-[calc(100vh-60px)] flex justify-center items-center">
      <div className="max-w-4xl px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-blue-400 mb-6">Welcome to Piyush's Online Web Development Compiler</h1>
        <p className="text-lg md:text-xl text-gray-300 mb-12">Write your HTML, CSS, and JavaScript code, and see the result instantly!</p>
        <div className="flex justify-center space-x-4">
          <Link to="/compiler">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-md shadow-md transition duration-300 ease-in-out">Start Coding</button>
          </Link>
          <Link to="https://www.linkedin.com/in/piyush-verma-883a26248/">
          <button className="bg-transparent border border-white hover:bg-white text-white hover:text-gray-900 font-bold py-3 px-8 rounded-md shadow-md transition duration-300 ease-in-out">Learn More</button>
          </Link>
        </div>
        
      </div>
    </div>
  );
}

export default Home;
