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
              <a
                href="https://discord.gg/coderctf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-indigo-800  text-white px-6 py-2 rounded-md hover:bg-indigo-600 transition-colors"
              >
                <div className="flex items-center space-x-2">
                  <span>Join Discord</span>
                  <svg className="w-5 h-5 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor">
                    <path d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z" />
                  </svg>
                </div>
              </a>
              <button className="bg-gray-800 text-white px-6 py-2 rounded-md  hover:bg-gray-700 transition-colors">
                Get Started
              </button>
            </div>
            <span className="mt-1 text-xs text-gray-400">
              <span className="text-gray-300">Join our discord community for </span>
              <a href="https://discord.gg/coderctf"
                target="_blank"
                rel="noopener noreferrer" className="text-blue-600 underline font-semibold">more information 💖</a>
            </span>
          </div>
          <div className=" md:flex hidden justify-end items-center">
            <Code />
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-center">What Our Users Say</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border border-gray-600 rounded-lg shadow-md">
              <p className="text-gray-400">
                "This platform has been a game-changer for me. The challenges are fun and educational!"
              </p>
              <span className="block mt-2 text-sm font-semibold text-gray-600">- Alex</span>
            </div>
            <div className="p-4 border border-gray-600 rounded-lg shadow-md">
              <p className="text-gray-400">
                "I love how the community is so supportive and welcoming to beginners."
              </p>
              <span className="block mt-2 text-sm font-semibold text-gray-600">- Jamie</span>
            </div>
            <div className="p-4 border border-gray-600 rounded-lg shadow-md">
              <p className="text-gray-400">
                "A must-join platform for anyone interested in cybersecurity!"
              </p>
              <span className="block mt-2 text-sm font-semibold text-gray-600">- Taylor</span>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Home;
