import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-[#F8F9FE] flex flex-col items-center justify-center p-10 text-center">
      <h1 className="text-6xl font-bold text-[#2D2B7E] mb-4">StudySync</h1>
      <p className="text-gray-600 text-xl mb-8 max-w-md">
        Welcome to your Study Planner. Stay organized and crush your goals!
      </p>
      
      <Link 
        to="/dashboard" 
        className="bg-[#2D2B7E] text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-opacity-90 transition"
      >
        Go to Dashboard →
      </Link>

      <img 
        src="https://illustrations.popsy.co/purple/studying.svg" 
        alt="illustration" 
        className="w-80 mt-12"
      />
    </div>
  );
}

export default Home;