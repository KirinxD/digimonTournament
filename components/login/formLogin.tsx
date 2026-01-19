'use client';

import { ArrowBigDown, Check, X } from 'lucide-react';
import { useState, useRef } from 'react';

export default function VPetLogin  () {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [activeField, setActiveField] = useState<'user' | 'pass'>('user');
  
  const userRef = useRef<HTMLInputElement>(null);
  const passRef = useRef<HTMLInputElement>(null);

  // Función para generar el sonido de "Beep" retro
  const playBeep = () => {
    const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    oscillator.type = 'square'; // Onda cuadrada para sonido 8-bit
    oscillator.frequency.setValueAtTime(880, audioCtx.currentTime); // Nota La5
    
    gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.1);

    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    oscillator.start();
    oscillator.stop(audioCtx.currentTime + 0.1);
  };

  // Simulación de navegación con botón A
  const handleNextField = () => {
    playBeep();
    if (activeField === 'user') {
      setActiveField('pass');
      passRef.current?.focus();
    } else {
      setActiveField('user');
      userRef.current?.focus();
    }
  };

  // Acción del botón B (Submit)
  const handleSubmit = (e?: React.FormEvent) => {
    playBeep();
    e?.preventDefault();
    console.log('Enviando datos:', { user, pass });
    alert(`Iniciando sesión como: ${user}`);
  };

  // Acción del botón C (Clear/Back)
  const handleClear = () => {
    playBeep();
    setUser('');
    setPass('');
    setActiveField('user');
    userRef.current?.focus();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-zinc-950 p-4 font-['Press_Start_2P',cursive]">
      {/* Estilos globales para la fuente Pixel si no la tienes en tu layout */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
      `}</style>

      {/* CARCASA DEL V-PET */}
      <div className="relative bg-indigo-700 w-full max-w-100 aspect-4/3 rounded-[4rem] border-b-14 border-r-14 border-indigo-900 p-8 flex items-center shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        
        {/* PANTALLA LCD */}
        <div className="grow bg-[#8b956d] h-48 border-12 border-zinc-900 rounded-sm shadow-[inset_6px_6px_0px_rgba(0,0,0,0.3)] p-4 flex flex-col justify-between text-zinc-900 overflow-hidden">
          
          <div className="space-y-4">
            <h2 className="text-center text-sm border-b-2 border-zinc-900/20 pb-2">LOGIN v2.0</h2>
            
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className={`flex flex-col gap-1 ${activeField === 'user' ? 'opacity-100' : 'opacity-60'}`}>
                <label className="text-[10px]">USER:</label>
                <input
                  ref={userRef}
                  type="text"
                  value={user}
                  onChange={(e) => setUser(e.target.value)}
                  className="bg-transparent border-none outline-none text-[12px] placeholder:text-zinc-800/30"
                  placeholder="_______"
                  onFocus={() => setActiveField('user')}
                />
              </div>

              <div className={`flex flex-col gap-1 ${activeField === 'pass' ? 'opacity-100' : 'opacity-60'}`}>
                <label className="text-[10px]">PASS:</label>
                <input
                  ref={passRef}
                  type="password"
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                  className="bg-transparent border-none outline-none text-[12px] placeholder:text-zinc-800/30"
                  placeholder="*******"
                  onFocus={() => setActiveField('pass')}
                />
              </div>
            </form>
          </div>

          <div className="text-[8px] text-center animate-pulse">
            PRESS [B] TO START
          </div>
        </div>

        {/* BOTONERA LATERAL */}
        <div className="flex flex-col gap-6 ml-6">
          {/* Botón A: Siguiente */}
          <div className="flex flex-col items-center gap-1">
            <button 
              onClick={handleNextField}
              className="w-12 h-12 bg-zinc-200 rounded-full border-b-4 border-r-4 border-zinc-400 active:border-0 active:translate-y-1 active:translate-x-1 transition-all flex items-center justify-center"
            >
              <ArrowBigDown className='text-slate-700' size={24}/>
            </button>
         
            <span className="text-[8px] text-indigo-200">Siguiente</span>
          </div>
          
          {/* Botón B: Enter */}
          <div className="flex flex-col items-center gap-1">
            <button 
              onClick={() => handleSubmit()}
              className="w-12 h-12 bg-zinc-200 rounded-full border-b-4 border-r-4 border-zinc-400 active:border-0 active:translate-y-1 active:translate-x-1 transition-all flex items-center justify-center"
            >
            <Check className='text-slate-700' size={24}/>
            </button>
            <span className="text-[8px] text-indigo-200">Aceptar</span>
          </div>

          {/* Botón C: Clear */}
          <div className="flex flex-col items-center gap-1">
            <button 
              onClick={handleClear}
              className="w-12 h-12 bg-zinc-200 rounded-full border-b-4 border-r-4 border-zinc-400 active:border-0 active:translate-y-1 active:translate-x-1 transition-all flex items-center justify-center"
            >
              <X className='text-slate-700' size={24}/>
            </button>
            <span className="text-[8px] text-indigo-200">Borrar</span>
          </div>
        </div>

        {/* Decoración superior */}
        <div className="absolute top-6 left-1/4 flex gap-1.5">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-indigo-900/50" />
          ))}
        </div>
      </div>
    </div>
  );
};