import Navbar from "./components/Navbar"; // FIXED (default import)
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PokemonAPI } from "./components/PokemonAPI";

const client = new QueryClient();

export default function App() {
  return (
    <div className="bg-gradient-to-b from-amber-100 to-amber-200 min-h-screen"> 
      {/* FIXED: bg-linear-to-b → bg-gradient-to-b */}

      <QueryClientProvider client={client}>
        <PokemonAPI />
      </QueryClientProvider>
    </div>
  );
}
