import Code from "@/components/Code";

const Home = () => {

  return (
    <>
      <div className="p-10 max-w-6xl mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          <div className=" flex flex-col justify-center items-start">
            <span className=" font-semibold">
              <span className=" text-blue-600">Hello,</span> Welcome to
            </span>
            <span className=" text-4xl font-semibold">
              CODER COMMUNITY CTF
            </span>
            <span className=" text-gray-400">
              Made by community for community
            </span>
            <p className="  mt-4">
              Coder Community CTF is a platform for all levels of cybersecurity enthusiasts. Whether you are a beginner or an experienced professional, we have something for you. Join us today and start your cybersecurity journey!
            </p>
            <div className="flex space-x-2 mt-4">
              <span className="bg-green-950 text-green-100 text-xs font-medium px-2.5 py-0.5 rounded">
                Beginner Friendly
              </span>
              <span className="bg-blue-950 text-blue-100 text-xs font-medium px-2.5 py-0.5 rounded">
                Community Driven
              </span>
              <span className="bg-purple-950 text-purple-100 text-xs font-medium px-2.5 py-0.5 rounded">
                Free to Join
              </span>
            </div>
            <div className="flex flex-row items-center mt-8 gap-4">
              <button className="  bg-indigo-800 text-white px-6 py-2 rounded-md hover:bg-blue-600">
                Get Started
              </button>
              <a
                href="https://discord.gg/your-discord-link"
                target="_blank"
                rel="noopener noreferrer"
                className=" inline-block bg-gray-800 text-white px-6 py-2 rounded-md hover:bg-gray-700"
              >
                Join Our Discord
              </a>
            </div>
          </div>
          <div className=" md:flex hidden justify-end items-center">
            <Code />
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-center">What Our Users Say</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg shadow-md">
              <p className="text-gray-600">
                "This platform has been a game-changer for me. The challenges are fun and educational!"
              </p>
              <span className="block mt-2 text-sm font-semibold text-gray-800">- Alex</span>
            </div>
            <div className="p-4 border rounded-lg shadow-md">
              <p className="text-gray-600">
                "I love how the community is so supportive and welcoming to beginners."
              </p>
              <span className="block mt-2 text-sm font-semibold text-gray-800">- Jamie</span>
            </div>
            <div className="p-4 border rounded-lg shadow-md">
              <p className="text-gray-600">
                "A must-join platform for anyone interested in cybersecurity!"
              </p>
              <span className="block mt-2 text-sm font-semibold text-gray-800">- Taylor</span>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Home;
