// app/decks/[id]/loading.tsx

export default function Loading() {
  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center font-pixel p-6">
      <div className="max-w-md w-full border-2 border-zinc-800 p-8 bg-zinc-900/50 relative overflow-hidden">
        {/* EFECTO DE ESCANEO (Línea que baja) */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-indigo-500/30 shadow-[0_0_15px_rgba(99,102,241,0.5)] animate-scan"></div>

        {/* CONTENIDO RETRO */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-green-500 animate-pulse"></span>
            <p className="text-green-500 text-[10px] tracking-widest uppercase">
              Connection_Established
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-white text-xs">
              <span className="text-zinc-500">{">"}</span>{" "}
              ACCESSING_DIGITAL_NETWORK...
            </p>
            <p className="text-white text-xs">
              <span className="text-zinc-500">{">"}</span>{" "}
              DECRYPTING_CARD_DATA...
            </p>
            <p className="text-white text-xs">
              <span className="text-zinc-500">{">"}</span>{" "}
              INITIALIZING_VIRTUAL_PET_LINK...
            </p>
          </div>

          {/* BARRA DE PROGRESO PIXELADA */}
          <div className="mt-6">
            <div className="w-full h-4 border-2 border-zinc-700 p-[2px]">
              <div className="h-full bg-indigo-600 animate-progress"></div>
            </div>
            <div className="flex justify-between mt-2">
              <p className="text-[8px] text-zinc-500">SYNC_STATUS</p>
              <p className="text-[8px] text-zinc-500 animate-bounce">
                PLEASE_WAIT
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* DECORACIÓN EXTRA */}
      <p className="mt-8 text-[10px] text-zinc-700 uppercase tracking-tighter animate-pulse">
        Property of Izzy Izumi - Koushiro Enterprises
      </p>
    </div>
  );
}
