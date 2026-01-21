// app/decks/[id]/page.tsx

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/navbar/navbar";
import { CopyDeckButton, DigimonCard } from "@/components";
import { getCardById } from "@/lib/digimon";

// Simulación de los datos del mazo (Esto vendría de tu tabla Deck_Cards + Cards)
const MOCK_DECK = {
  name: "SAKUYAMON META (TB 1st JP)",
  player: "KirinxD",
  tournament: "TB Japon 13/01/2026",
  cardList: [
    { id: "ST22-01", qty: 4, name: "" },
    { id: "ST22-02", qty: 1, name: "" },
    { id: "EX2-019", qty: 4, name: "" },
    { id: "BT17-031", qty: 4, name: "" },
    { id: "ST22-03", qty: 4, name: "" },
    { id: "BT19-034", qty: 3, name: "" },
    { id: "ST22-04", qty: 4, name: "" },
    { id: "BT17-035", qty: 1, name: "" },
    { id: "EX8-037", qty: 2, name: "" },
    { id: "ST22-05", qty: 4, name: "" },
    { id: "ST22-06", qty: 1, name: "" },
    { id: "BT22-042", qty: 2, name: "" },
    { id: "EX2-060", qty: 1, name: "" },
    { id: "BT19-083", qty: 4, name: "" },
    { id: "P-105", qty: 4, name: "" },
    { id: "LM-029", qty: 2, name: "" },
    { id: "ST22-08", qty: 2, name: "" },
    { id: "ST22-09", qty: 3, name: "" },
    { id: "ST22-10", qty: 4, name: "" },
  ],
};

export default async function DeckDetailPage() {
  // 1. Llamamos a la API para cada carta del mazo
  // Usamos Promise.all para que todas las peticiones se hagan al mismo tiempo
  const fullCardsData = await Promise.all(
    MOCK_DECK.cardList.map(async (item) => {
      const apiData = await getCardById(item.id);
      return {
        ...apiData,
        quantity: item.qty,
        cardId: item.id, // Nos aseguramos de pasar el ID para la imagen
        cardName: item.name,
      };
    })
  );

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-pixel">
      <Navbar />

      <main className="max-w-7xl mx-auto p-6">
        {/* HEADER DEL MAZO */}
        <div className="mb-10 flex flex-col md:flex-row justify-between items-end gap-6 border-b-4 border-zinc-800 pb-8">
          <div>
            <Link
              href="/tournaments"
              className="text-[8px] text-zinc-500 hover:text-indigo-400 flex items-center gap-2 mb-4"
            >
              <ArrowLeft size={10} /> BACK_TO_TOURNAMENT
            </Link>
            <h1 className="text-2xl text-yellow-500 mb-2 uppercase">
              {MOCK_DECK.name}
            </h1>
            <p className="text-xs text-zinc-400">
              TAMER: {MOCK_DECK.player} | EVENT: {MOCK_DECK.tournament}
            </p>
          </div>
          <div className="flex items-center">
            <CopyDeckButton deckList={MOCK_DECK.cardList} />
          </div>
        </div>

        {/* GRID DE CARTAS */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {MOCK_DECK.cardList.map((card, index) => (
            <DigimonCard
              quantity={card.qty}
              cardId={card.id}
              cardName={card.name}
              key={index}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
