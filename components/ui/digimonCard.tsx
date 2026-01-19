"use client";

import Image from "next/image";
import { useState } from "react";

interface Props {
  quantity: number;
  cardId: string;
  cardName: string;
}

export const DigimonCard = ({ quantity, cardId, cardName }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  const getImageUrl = (id: string) =>
    `https://images.digimoncard.io/images/cards/${id}.jpg`;

  return (
    /* El contenedor padre ahora tiene 'hover:z-50' para que, 
       al pasar el mouse, esta carta y su zoom queden por encima de todo el grid.
    */
    <div
      className={`relative group ${isHovered ? "z-50" : "z-0"}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* --- CARTA ZOOM (POSICIONADA AL LADO) --- */}
      {isHovered && (
        <div
          className="
          absolute top-0 left-[105%] ml-2
          hidden lg:block
          w-[450px] aspect-3/4 
          z-50 pointer-events-none
          animate-in fade-in slide-in-from-left-2 duration-300
        "
        >
          <div className="relative w-full h-full border-4 border-yellow-500 bg-zinc-900 shadow-2xl rounded-lg overflow-hidden">
            <Image
              src={getImageUrl(cardId)}
              alt={cardName}
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>
      )}

      {/* --- CARTA MINIATURA (TU DISEÑO ORIGINAL) --- */}
      <div className="absolute -top-2 -left-2 z-10 bg-indigo-600 text-white text-[10px] w-8 h-8 flex items-center justify-center border-2 border-white shadow-[2px_2px_0px_#000]">
        x{quantity}
      </div>

      <div className="relative aspect-3/4 border-2 border-zinc-800 group-hover:border-yellow-500 transition-all bg-zinc-900 overflow-hidden shadow-lg cursor-zoom-in">
        <Image
          src={getImageUrl(cardId)}
          alt={cardName}
          fill
          className="object-contain group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 50vw, 20vw"
        />

        {/* Overlay pequeño inferior solo para el ID */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/70 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <p className="text-[8px] text-center text-yellow-500 font-pixel">
            {cardId}
          </p>
        </div>
      </div>
    </div>
  );
};
