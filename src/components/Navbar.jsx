// Navbar.jsx
export default function Navbar({ search, setSearch }) {
  return (
    <div className="flex items-center justify-center gap-6 px-6 py-6 pt-9">
      <div className="font-extrabold text-orange-600 text-xl">POKEDEX</div>
      <div>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Pokemon Name Here..."
          type="text"
          className="bg-white rounded-3xl w-80 h-10 text-sm font-semibold px-5 border border-transparent focus:border-amber-100 focus:ring-2 focus:ring-amber-400 outline-none"
        />
      </div>
    </div>
  );
}
