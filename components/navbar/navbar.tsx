// components/Navbar.tsx
import Link from 'next/link';

export const Navbar = () => {
  return (
    <nav className="w-full bg-zinc-900 border-b-4 border-indigo-600 p-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-sm md:text-lg text-indigo-400 hover:text-indigo-600 transition-colors">
          DTP
        </Link>
        
        <div className="flex items-center gap-6 text-[10px] md:text-xs">
          <Link href="/tournaments" className="hover:text-yellow-400 transition-colors">TOURNAMENTS</Link>
          <Link href="/login" className="bg-indigo-600 px-3 py-1 border-b-4 border-r-4 border-indigo-900 active:border-0 active:translate-y-1">
            LOGIN
          </Link>
        </div>
      </div>
    </nav>
  );
};