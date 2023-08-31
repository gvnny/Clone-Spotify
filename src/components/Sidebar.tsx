import {
    Home as HomeIcon,
    Search,
    Library
  } from 'lucide-react';
  
  import Link from "next/link"

export function Sidebar() {
    return(
        <aside className="w-72 bg-zinc-950 p-6">
          
          {/* Botões padões de browser  */}
          <div className="flex items-center gap-2 ">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>

          {/* Categorias */}
          <nav className="space-y-5 mt-10">
            <Link href="/home" className="flex items-center gap-3 text-xs font-semibold">
              <HomeIcon />
              Home
            </Link>

            <Link href="/search" className="flex items-center gap-3">
              <Search />
              Search
            </Link>

            <Link href="/your-library" className="flex items-center gap-3">
              <Library />
              Your Library
            </Link>
          </nav>
          
          {/* Playlist do User */}
          <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3 ">

            <Link href="" className="text-zinc-400 text-sm hover:text-zinc-100">
              Baile de Garagem
            </Link>

            <Link href="" className="text-zinc-400 text-sm hover:text-zinc-100">
              Baile de Negrão
            </Link>

            <Link href="" className="text-zinc-400 text-sm hover:text-zinc-100">
              Bad
            </Link>

            <Link href="" className="text-zinc-400 text-sm hover:text-zinc-100">
              Brasileirinho
            </Link>

            <Link href="" className="text-zinc-400 text-sm hover:text-zinc-100">
              Românticas
            </Link>

            <Link href="" className="text-zinc-400 text-sm hover:text-zinc-100">
              Rap Brasil
            </Link>

          </nav>

        </aside>
    )
}