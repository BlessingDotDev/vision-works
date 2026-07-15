import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { flexcenter, sm } from "@/lib/styles";

function SearchInput() {
  return (
    <div className={flexcenter}>
      <input
        type="text"
        placeholder="What do you need help with?"
        className="w-full max-w-xl h-12 rounded-bl-xl 
          rounded-tl-xl p-4 text-sm bg-white/10 border
        border-white/20 focus:outline-none focus:ring-1 
        focus:ring-green-950 transition-all duration-300"
      />
      <button className="flex justify-center items-center cursor-pointer bg-green-950 
      h-12 w-12 rounded-br-xl rounded-tr-xl ring-green-950 ring-1">
        <MagnifyingGlassIcon className={sm} />
      </button>
    </div>
  );
}

export default SearchInput;