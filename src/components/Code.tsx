
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
const Code = () => {
  const codeString = `import React from "react";

const Code = () => {
  return (
    <div>
        Play with logic and Have fun
    </div>
  );
};
export default Code;
`;
  return (
    <div className=" flex flex-col  items-end ">
      <div className="relative inline-flex group ">
        <div
          className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#6044ff] via-[#5744ff] to-[#1800ee] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
        </div>
        <div className=" relative inline-flex w-fit flex-col overflow-hidden rounded-xl shadow-blue-900/50 shadow-lg bg-[#1d1f21] hover:shadow-xl transition duration-300 ease-in-out">
          
          <div className="flex w-full  justify-between border-b border-gray-600 px-4 py-3 text-white text-xs items-center">
            <p className="text-sm">
              Code.tsx
            </p>
            <button className="py-1 inline-flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
              </svg>
              Copy code
            </button>
          </div>

          <SyntaxHighlighter language="tsx" style={atomDark} customStyle={{ padding: "25px" }} wrapLongLines={true}>
            {codeString}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};

export default Code;
