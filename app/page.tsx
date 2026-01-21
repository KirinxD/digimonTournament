import { AboutMe } from "@/components";
import { Navbar } from "@/components/navbar/navbar";

export default function Home() {
  return (
    <div className="min-h-screen">
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

        <AboutMe />

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
