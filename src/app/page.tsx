import {
  ChevronLeft,
  ChevronRight,
  Play,

} from 'lucide-react';

import Link from "next/link"
import Image from "next/image";
import { Sidebar } from '@/components/Sidebar';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="h-screen flex flex-col">

      <div className="flex flex-1">

        {/* Aba lateral */}
        <Sidebar/>

        {/* Conteudo */}
        <main className="flex-1 p-6">

          {/* Botões left e rigth */}
          <div className="flex, items-center gap-4">

            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>

            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>

          </div>

          {/* Titulo da primeira sessão */}
          <h1 className="font-semibold text-3xl mt-10">Good Afternoon!</h1>

          {/* Playkists recomendadas (primeira sessão)*/}
          <div className="grid grid-cols-3 gap-4 mt-4">

            <Link href="#" className="bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">

              <Image src="/nirvana-album.jpg" width={104} height={104} alt="Capa do álbum Nevermind da banda Nirvana" />

              <strong>Nevermind</strong>

              <button className="w-12 h-12 items-center justify-center pl-3 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible ">
                <Play />
              </button>

            </Link>

            <Link href="#" className="bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">

              <Image src="/pinkFloyd-album.png" width={104} height={104} alt="Capa do álbum The Dark Side of the Moon da banda Pink Floyd" />

              <strong>The Dark Side of the Moon</strong>

              <button className="w-12 h-12 items-center justify-center pl-3 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible ">
                <Play />
              </button>

            </Link>

            <Link href="#" className="bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">

              <Image src="/queen-album.jpg" width={104} height={104} alt="Capa do álbum Queen 2 da banda Queen" />

              <strong>Queen II</strong>

              <button className="w-12 h-12 items-center justify-center pl-3 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible ">
                <Play />
              </button>

            </Link>

            <Link href="#" className="bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">

              <Image src="/acdc-album.png" width={104} height={104} alt="Capa do álbum Black in Black da banda AC/DC" />
              
              <strong>Black in Black</strong>

              <button className="w-12 h-12 items-center justify-center pl-3 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible ">
                <Play />
              </button>

            </Link>

            <Link href="#" className="bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">

              <Image src="/davidBowie-album.jpg" width={104} height={104} alt="Capa do álbum Aladdin Sane do artísta David Bowie" />

              <strong>Aladdin Sane</strong>

              <button className="w-12 h-12 items-center justify-center pl-3 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible ">
                <Play />
              </button>

            </Link>

            <Link href="#" className="bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">

              <Image src="/jorgeBen-album.jpg" width={104} height={104} alt="Capa do álbum A Tábua de Esmeralda do cantor Jorge Ben" />

              <strong>A Tábua de Esmeralda</strong>

              <button className="w-12 h-12 items-center justify-center pl-3 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible ">
                <Play />
              </button>
              
            </Link>

          </div>

          {/* Titulo da segunda sessão */}
          <h2 className="font-semibold text-2xl mt-10">Made for diego Schell Fernandes</h2>
          
          {/* Mix e playlists do Diego (Segunda sessão) */}
          <div className="grid grid-cols-8 gap-4 mt-4">
            
            <Link href="#" className="bg-white/5 p-2 rounded-md flex flex-col gap-2 hover:bg-white/10">

              <Image src="/nirvana-album.jpg" className="w-full" width={120} height={120} alt="Capa do álbum Nevermind da banda Nirvana" />

              <strong className="font-semibold">Daile mix 1</strong>

              <span className="text-sm text-zinc-500">Nirvana</span>

            </Link>

            <Link href="#" className="bg-white/5 p-2 rounded-md flex flex-col gap-2 hover:bg-white/10">

              <Image src="/acdc-album.png" className="w-full" width={120} height={120} alt="Capa do álbum Nevermind da banda Nirvana" />

              <strong className="font-semibold">Daile mix 2</strong>

              <span className="text-sm text-zinc-500">AC/DC</span>

            </Link>

            <Link href="#" className="bg-white/5 p-2 rounded-md flex flex-col gap-2 hover:bg-white/10">

              <Image src="/pinkFloyd-album.png" className="w-full" width={120} height={120} alt="Capa do álbum Nevermind da banda Nirvana" />

              <strong className="font-semibold">Daile mix 3</strong>

              <span className="text-sm text-zinc-500">Pink Floyd</span>

            </Link>

            <Link href="#" className="bg-white/5 p-2 rounded-md flex flex-col gap-2 hover:bg-white/10">

              <Image src="/queen-album.jpg" className="w-full" width={120} height={120} alt="Capa do álbum Nevermind da banda Nirvana" />

              <strong className="font-semibold">Daile mix 4</strong>

              <span className="text-sm text-zinc-500">Queen</span>

            </Link>

            <Link href="#" className="bg-white/5 p-2 rounded-md flex flex-col gap-2 hover:bg-white/10">

              <Image src="/jorgeBen-album.jpg" className="w-full" width={120} height={120} alt="Capa do álbum Nevermind da banda Nirvana" />

              <strong className="font-semibold">Daile mix 5</strong>

              <span className="text-sm text-zinc-500">Jorge Ben</span>

            </Link>

          </div>

        </main>

      </div>

      {/* Player de musica */}
      <Footer/>

    </div>
  )
}
