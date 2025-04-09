
const RulesSection = () => {
  return (
    <div className="mt-16">
      <h2 className="text-2xl font-semibold text-center mb-6">CTF Rules & Guidelines</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Rules */}
        <div className="border border-gray-700 rounded-lg p-6 bg-opacity-30 bg-gray-900">
          <h3 className="text-xl font-semibold mb-4 text-blue-400 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            Rules
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <svg className="h-5 w-5 text-green-400 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Do not share flags or solutions with other participants
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-green-400 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              No brute forcing or DoS attempts against the platform
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-green-400 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Do not attempt to attack or disrupt the CTF infrastructure
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-green-400 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Respect other participants and maintain a positive environment
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-green-400 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Violation of rules may result in disqualification
            </li>
          </ul>
        </div>

        {/* Flag Format */}
        <div className="border border-gray-700 rounded-lg p-6 bg-opacity-30 bg-gray-900">
          <h3 className="text-xl font-semibold mb-4 text-purple-400 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
            </svg>
            Flag Format
          </h3>
          <div className="space-y-4">
            <p>Flags are in the following format:</p>
            <div className="bg-zinc-800 p-3 rounded-md font-mono">
              CoderCTF&#123;something_here&#125;
            </div>
            <div className="mt-4 space-y-2">
              <p className="text-sm text-gray-300">Examples:</p>
              <ul className="space-y-2 text-sm font-mono pl-5 text-gray-400">
                <li>CoderCTF&#123;this_is_a_sample_flag&#125;</li>
                <li>CoderCTF&#123;w3lc0m3_t0_cod3r_ctf&#125;</li>
                <li>CoderCTF&#123;s3cur1ty_1s_fun&#125;</li>
              </ul>
            </div>
            <div className="mt-4 p-3 bg-blue-900 bg-opacity-30 border border-blue-700 rounded-md text-blue-200">
              <p className="text-sm">
                <span className="font-semibold">Note:</span> Submit the entire flag including the CODER-CTF{} wrapper.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RulesSection;
