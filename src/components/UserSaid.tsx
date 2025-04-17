
const UserSaid = () => {
    return (
        <>
            <div className="">
                <div className="flex justify-center mt-32">
                    <h2 className="inline-block text-2xl font-black text-center mb-10 py-2 px-6 border-4 border-black bg-gray-500 text-black transform rotate-1 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">What Our Users Say</h2>
                </div>
                <div className=" grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 border border-gray-700 rounded-lg shadow-md">
                        <p className="text-gray-400">
                            "This platform has been a game-changer for me. The challenges are fun and educational!"
                        </p>
                        <span className="block mt-2 text-sm font-semibold text-gray-600">- Alex</span>
                    </div>
                    <div className="p-4 border border-gray-700 rounded-lg shadow-md">
                        <p className="text-gray-400">
                            "I love how the community is so supportive and welcoming to beginners."
                        </p>
                        <span className="block mt-2 text-sm font-semibold text-gray-600">- Jamie</span>
                    </div>
                    <div className="p-4 border border-gray-700 rounded-lg shadow-md">
                        <p className="text-gray-400">
                            "A must-join platform for anyone interested in cybersecurity!"
                        </p>
                        <span className="block mt-2 text-sm font-semibold text-gray-600">- Taylor</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserSaid;
