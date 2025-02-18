import React from "react";
import { Button } from "@/components/ui/button"

const App = () => {
  return (
    <>
      <h1 className="text-3xl bg-blue-500 font-bold text-center mt-10">
        Welcome to Vite + React + Tailwind CSS
      </h1>
      <p className="text-center mt-5">
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <Button>Button</Button>
    </>
    );
};

export default App;
