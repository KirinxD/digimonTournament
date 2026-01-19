// app/tournaments/page.tsx
import { ButtonViewDecks, DeckWinner } from "@/components";
import { Navbar } from "@/components/navbar/navbar";
import { Users, Calendar } from "lucide-react";

const MOCK_TOURNAMENTS = [
  {
    id: 1,
    name: "DIGI TORNEO DEL PODER",
    date: "2024-05-10",
    players: 64,
    winnerDeck: "Magnamon X-Antibody",
    winnerColor: "bg-yellow-500",
  },
  {
    id: 2,
    name: "STORE CHAMPIONSHIP",
    date: "2024-05-08",
    players: 16,
    winnerDeck: "Imperialdramon",
    winnerColor: "bg-blue-600",
  },
];

export default function TournamentsPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Navbar />

      <main className="max-w-6xl mx-auto p-6 pt-12">
        <header className="mb-12 border-l-8 border-indigo-600 pl-6">
          <h1 className="text-2xl md:text-3xl text-indigo-400 mb-2 underline decoration-double">
            TOURNAMENT_DATABASE
          </h1>
          <p className="text-[10px] text-zinc-500 uppercase tracking-widest">
            Consulta los resultados y metas locales
          </p>
        </header>

        {/* LISTA DE TORNEOS */}
        <div className="grid gap-6">
          {MOCK_TOURNAMENTS.map((t) => (
            <div
              key={t.id}
              className="group relative bg-zinc-900 border-2 border-zinc-800 hover:border-indigo-500 p-6 transition-all cursor-pointer overflow-hidden"
            >
              {/* Indicador de Ganador (Color del mazo) */}
              <div
                className={`absolute top-0 right-0 w-24 h-24 ${t.winnerColor} opacity-10 rotate-45 translate-x-12 -translate-y-12`}
              ></div>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                {/* Info Principal */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-[10px] text-zinc-500">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} /> {t.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users size={12} /> {t.players} TAMERS
                    </span>
                  </div>
                  <h3 className="text-lg group-hover:text-indigo-400 transition-colors">
                    {t.name}
                  </h3>
                </div>

                <DeckWinner winnerDeck={t.winnerDeck} />
                <ButtonViewDecks />
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
