/* eslint-disable react/prop-types */
export default function SearchBox({
  searchedWord,
  handleInputChange,
  handleSearch,
}) {
  return (
    <div className="p-4 flex items-center justify-center gap-4 bg-gray-100 rounded shadow">
      <input
        type="text"
        placeholder="Search..."
        className="outline-none border-2 border-slate-300 p-1 rounded focus:border-sky-500 text-gray-600 font-semibold w-full"
        value={searchedWord}
        onChange={(e) => handleInputChange(e.target.value)}
      />
      <button
        onClick={handleSearch}
        className="text-2xl p-1 bg-gray-200 hover:bg-gray-300 transition flex justify-center items-center rounded"
      >
        🔍
      </button>
    </div>
  );
}
