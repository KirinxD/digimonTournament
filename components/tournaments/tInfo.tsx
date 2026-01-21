import { Calendar, Users } from "lucide-react";

interface props {
  date: string;
  players: number;
  tName: string;
}
export const TInfo = ({ date, players, tName }: props) => {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3 text-[10px] text-zinc-500">
        <span className="flex items-center gap-1">
          <Calendar size={12} /> {date}
        </span>
        <span className="flex items-center gap-1">
          <Users size={12} /> {players} TAMERS
        </span>
      </div>
      <h3 className="text-lg group-hover:text-indigo-400 transition-colors">
        {tName}
      </h3>
    </div>
  );
};
