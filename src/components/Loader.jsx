export default function Loader() {
  return (
    <div className="flex justify-center items-center flex-col">
      <img
        src="/tcod-logo-white.jpg"
        alt="Logo"
        className="h-28 object-contain rounded-full animate-bounce"
      />
      <h2 className="text-2xl font-bold text-gray-800 animate-pulse">TCOD</h2>
      <p className="text-xl font-semibold text-gray-600 animate-pulse">
        The Code Of Duty
      </p>
    </div>
  );
}
