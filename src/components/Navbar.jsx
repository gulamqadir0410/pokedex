export default function Navbar({ search, setSearch }) {
  return (
    <div
      className="
        flex flex-col md:flex-row 
        items-center 
        justify-center md:justify-center 
        gap-4 md:gap-10 
        px-4 py-6
      "
    >
      {/* Logo */}
      <div className="font-extrabold text-orange-600 text-2xl">
        POKEDEX
      </div>

      {/* Search Input */}
      <div className="w-full md:w-96">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Pokemon Name Here..."
          type="text"
          className="
            w-full 
            bg-white rounded-3xl 
            h-10 text-sm font-semibold 
            px-5 border border-transparent 
            focus:border-amber-100 focus:ring-2 focus:ring-amber-400 
            outline-none
          "
        />
      </div>
    </div>
  );
}
