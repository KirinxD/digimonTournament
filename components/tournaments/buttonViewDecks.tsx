import { ExternalLink } from "lucide-react";
import Link from "next/link";

export const ButtonViewDecks = () => {
  return (
    <button className="flex bg-indigo-600 hover:bg-indigo-500 text-[10px] px-4 py-3 border-b-4 border-indigo-900 active:border-0 transition-all">
      <Link
        className="flex items-center justify-center space-x-1"
        href={"/decks/1"}
      >
        <span>VIEW_ALL_DECKS</span>
        <ExternalLink className="mb-1" size={13} />
      </Link>
    </button>
  );
};
