import { Trophy } from "lucide-react";
interface props {
  winnerDeck: string;
}
export const DeckWinner = ({ winnerDeck }: props) => {
  return (
    <div className="flex items-center gap-4 bg-zinc-950/50 p-4 border border-zinc-800">
      <div className="text-right">
        <p className="text-[8px] text-zinc-500 mb-1">WINNER_DECK</p>
        <p className="text-xs text-yellow-500">{winnerDeck}</p>
      </div>
      <div className="w-10 h-10 bg-zinc-800 flex items-center justify-center border-2 border-zinc-700">
        <Trophy size={20} className="text-yellow-500" />
      </div>
    </div>
  );
};
