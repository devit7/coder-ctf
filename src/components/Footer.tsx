import React from "react";
import { Link } from "react-router";

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-white py-10 border-t border-dashed bg-opacity-30 border-gray-800">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {/* Logo and description */}
                    <div className="flex flex-col">
                        <h2 className="text-2xl font-bold mb-4">CODER CTF</h2>
                        <p className="text-gray-400 mb-4">
                            A platform for all levels of cybersecurity enthusiasts to learn,
                            practice, and compete in capture the flag challenges.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://www.coder-telkomsby.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
                            </li>
                            <li>
                                <Link to="/challenges" className="text-gray-400 hover:text-white transition-colors">Challenges</Link>
                            </li>
                            <li>
                                <Link to="/leaderboard" className="text-gray-400 hover:text-white transition-colors">Leaderboard</Link>
                            </li>
                            <li>
                                <Link to="/user" className="text-gray-400 hover:text-white transition-colors">Users</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <p className="text-gray-400 mb-2">Have questions or suggestions?</p>
                        <p className="text-gray-400 mb-4">Join our Discord community for support and discussions.</p>
                        <a
                            href="https://discord.gg/cSYWB25Y5v"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-indigo-600 text-white px-4 py-2  inline-block hover:bg-indigo-700 transition-colors"
                        >
                            Join Discord
                        </a>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-10 pt-6 text-center">
                    <p className="text-gray-400">
                        © {new Date().getFullYear()} CODER CYBER DIVISION. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
