import Image from "next/image";

export const AboutMe = () => {
  return (
    <>
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
    </>
  );
};
