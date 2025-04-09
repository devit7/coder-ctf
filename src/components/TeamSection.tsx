import { useState } from "react";

interface TeamMember {
    id: number;
    name: string;
    role: string;
    bio: string;
    imageUrl: string;
    socialLinks: {
        github?: string;
        linkedin?: string;
        twitter?: string;
    };
}

const teamMembers: TeamMember[] = [
    {
        id: 1,
        name: "Alex Johnson",
        role: "Lead Developer",
        bio: "Full-stack developer with expertise in React and Node.js. Passionate about building secure, scalable web applications.",
        imageUrl: "https://ui-avatars.com/api/?name=Alex+Johnson&background=random",
        socialLinks: {
            github: "https://github.com",
            linkedin: "https://linkedin.com",
            twitter: "https://twitter.com",
        },
    },
    {
        id: 2,
        name: "Sarah Chen",
        role: "Security Specialist",
        bio: "Cybersecurity expert with a focus on web application security and CTF challenge design.",
        imageUrl: "https://ui-avatars.com/api/?name=Sarah+Chen&background=random",
        socialLinks: {
            github: "https://github.com",
            linkedin: "https://linkedin.com",
        },
    },
    {
        id: 3,
        name: "Miguel Rodriguez",
        role: "UI/UX Designer",
        bio: "Creative designer with a passion for crafting beautiful, intuitive user experiences for web applications.",
        imageUrl: "https://ui-avatars.com/api/?name=Miguel+Rodriguez&background=random",
        socialLinks: {
            github: "https://github.com",
            twitter: "https://twitter.com",
        },
    },
    {
        id: 4,
        name: "Priya Patel",
        role: "Backend Developer",
        bio: "Database and API specialist who ensures our platform runs smoothly and securely.",
        imageUrl: "https://ui-avatars.com/api/?name=Priya+Patel&background=random",
        socialLinks: {
            github: "https://github.com",
            linkedin: "https://linkedin.com",
        },
    },
];

const TeamSection = () => {
    const [hoveredMember, setHoveredMember] = useState<number | null>(null);

    return (
        <div className="mt-16 mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-4">Meet Our Team</h2>
            <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
                The passionate developers, security experts, and designers behind CODER-CTF who work together to create challenging and educational cybersecurity experiences.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {teamMembers.map((member) => (
                    <div
                        key={member.id}
                        className="relative"
                        onMouseEnter={() => setHoveredMember(member.id)}
                        onMouseLeave={() => setHoveredMember(null)}
                    >
                        <div className="relative overflow-hidden rounded-xl transform transition-all duration-300 ease-in-out hover:-translate-y-2">
                            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-500 opacity-75 blur-sm rounded-xl"></div>
                            <div className="relative bg-[#121228] p-6 rounded-xl h-full flex flex-col">
                                <div className="flex items-center gap-4 mb-4">
                                    <img
                                        src={member.imageUrl}
                                        alt={member.name}
                                        className="w-16 h-16 rounded-full object-cover border-2 border-purple-500"
                                    />
                                    <div>
                                        <h3 className="font-semibold text-lg">{member.name}</h3>
                                        <p className="text-purple-400">{member.role}</p>
                                    </div>
                                </div>

                                <p className="text-gray-400 text-sm mb-5">{member.bio}</p>

                                <div className="mt-auto flex gap-3">
                                    {member.socialLinks.github && (
                                        <a href={member.socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                            </svg>
                                        </a>
                                    )}
                                    {member.socialLinks.linkedin && (
                                        <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
                                            </svg>
                                        </a>
                                    )}
                                    {member.socialLinks.twitter && (
                                        <a href={member.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                            </svg>
                                        </a>
                                    )}
                                </div>

                                {hoveredMember === member.id && (
                                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-blue-900/70 to-purple-900/70 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300">
                                        <button className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-4 py-2 rounded-md backdrop-blur-sm transition-all">
                                            View Profile
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-12 text-center">
                <p className="text-gray-300">
                    Interested in joining our team?{" "}
                    <a href="#" className="text-purple-400 hover:text-purple-300 underline">
                        Check out our open positions
                    </a>
                </p>
            </div>
        </div>
    );
};

export default TeamSection;
