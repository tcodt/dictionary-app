import { useState } from "react";
import "./App.css";
import Loader from "./components/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col gap-4">
          {isLoading ? (
            <Loader />
          ) : (
            <div className="p-4 w-full md:w-2/3 lg:w-1/2 xl:w-1/4">
              <input
                type="text"
                placeholder="Search..."
                className="outline-none border-2 border-slate-300 p-1 rounded focus:border-sky-500"
              />
              <button></button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
