
const UserSaid = () => {
    return (
        <>
            <div className="mt-16">
                <h2 className="text-2xl font-semibold text-center">What Our Users Say</h2>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
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
