/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useState } from "react";
import Loader from "./components/Loader";
import axios from "axios";
import "./App.css";
import SearchBox from "./components/SearchBox";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [searchedWord, setSearchedWord] = useState("");

  const getMeaning = () => {
    if (searchedWord.trim() === "") return;
    setIsLoading(true);
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${searchedWord}`)
      .then((res) => {
        setData(res.data[0]);
        setIsLoading(false);
        console.log(res.data[0]);
      })
      .catch(() => {
        setIsLoading(false);
      });
  };

  const handleInputChange = useCallback((value) => {
    setSearchedWord(value);
  }, []);

  const handleSearch = useCallback(() => {
    getMeaning();
  }, [getMeaning]);

  const playAudio = () => {
    let audio = new Audio(data.phonetics[0].audio);
    audio.play();
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col gap-4 justify-center items-center">
          {isLoading ? (
            <Loader />
          ) : (
            <div className="flex flex-col gap-8 justify-center items-center md:max-w-[70%] w-[90%]">
              <SearchBox
                searchedWord={searchedWord}
                handleInputChange={handleInputChange}
                handleSearch={handleSearch}
              />
              {data && (
                <div className="bg-slate-100 shadow p-4 rounded flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <h3 className="text-2xl text-gray-900 font-semibold">
                      {data.word}
                    </h3>
                    {data.phonetics[0].audio.trim() !== "" && (
                      <button onClick={() => playAudio()} className="text-xl">
                        🔊
                      </button>
                    )}
                  </div>
                  <div className="flex items-center gap-4">
                    <h3 className="text-base text-gray-600 font-semibold">
                      Parts of speech:
                    </h3>
                    <p className="text-base text-gray-500 font-medium">
                      {data.meanings[0].partOfSpeech}
                    </p>
                  </div>
                  <hr />
                  <div className="flex gap-1 md:items-center md:gap-4 flex-col md:flex-row">
                    <h3 className="text-base text-gray-600 font-semibold">
                      Definition:
                    </h3>
                    <p className="text-base text-gray-500 font-medium">
                      {data.meanings[0].definitions[0].definition}
                    </p>
                  </div>
                  {data.meanings[0].synonyms.length > 1 && (
                    <>
                      <hr />
                      <div className="flex gap-1 md:items-center md:gap-4 flex-col md:flex-row">
                        <h3 className="text-base text-gray-600 font-semibold">
                          Synonyms:
                        </h3>
                        <p className="text-base text-gray-500 font-medium">
                          {data.meanings[0].synonyms.join(", ")}
                        </p>
                      </div>
                    </>
                  )}

                  {data.meanings[0].definitions[0]?.example && (
                    <>
                      <hr />
                      <div className="flex gap-1 md:items-center md:gap-4 flex-col md:flex-row">
                        <h3 className="text-base text-gray-600 font-semibold">
                          Example:
                        </h3>
                        <p className="text-base text-gray-500 font-medium">
                          {data.meanings[0].definitions[0].example}
                        </p>
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
