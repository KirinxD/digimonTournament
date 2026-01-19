import { Navbar } from "@/components/navbar/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Navbar />
      <main className="max-w-4xl mx-auto pt-10 px-6 pb-10">
        {/* HERO SECTION */}
        <section className="text-center mb-10">
          <h1 className="text-3xl md:text-5xl mb-6 text-indigo-500 animate-pulse">
            DIGIMON TCG TRACKER
          </h1>
          <p className="text-xs md:text-sm text-zinc-400 leading-relaxed">
            DE DESARROLLADORES PARA TAMERS. REGISTRA TU META, ANALIZA TUS MAZOS.
          </p>
        </section>

        {/* STORY SECTION */}
        <section className="flex flex-col md:flex-row items-center gap-12 border-4 border-white p-8 relative">
          {/* Badge Decorativo */}
          <div className="absolute -top-4 -left-4 bg-yellow-400 text-zinc-900 px-2 py-1 text-[10px]">
            DEV_LOG v1.0
          </div>

          {/* Tu Foto en círculo con borde pixelado */}
          <div className="relative w-40 h-40 shrink-0">
            <div className="absolute inset-0 rounded-full border-4 border-indigo-500 scale-110"></div>
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-white relative">
              <Image
                src="/mi-foto.jpg"
                alt="Developer"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex text-center mt-4 ">Adrián Alfonso</div>
          </div>

          {/* El Texto de la historia */}
          <div className="space-y-4 text-xs md:text-sm leading-loose">
            <p>
              <span className="text-indigo-400 underline">
                {">"} ¿POR QUÉ EXISTE ESTO?
              </span>
            </p>
            <p>
              Todo empezó con un grupo de amigos juntándonos una vez al mes para
              jugar Digimon TCG. Queríamos saber quién ganaba más, qué mazos
              dominaban nuestro pequeño meta local y tener un registro real de
              nuestras partidas.
            </p>
            <p>
              Lo que empezó como una lista privada para nosotros, creció. Pensé:{" "}
              <span className="text-yellow-400">
                &quot;Si nos sirve a nosotros, le sirve a cualquier tamer.&quot;
              </span>
            </p>
            <p>
              Hoy es una plataforma abierta para que cualquier comunidad pueda
              trackear sus torneos y aprender de los mazos ganadores.
            </p>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="mt-10 text-center">
          <div className="inline-block border-2 border-dashed border-zinc-700 p-6">
            <p className="mb-6 text-[10px]">
              ¿LISTO PARA REGISTRAR TU PRIMER TORNEO?
            </p>
            <button className="bg-white text-zinc-900 px-8 py-4 font-bold hover:bg-yellow-400 transition-colors">
              DIGITAL_GATE_OPEN
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
