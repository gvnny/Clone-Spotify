import {
    Play,
    Shuffle,
    SkipBack,
    SkipForward,
    Repeat,
    Mic2,
    LayoutList,
    Laptop2,
    Volume,
    Maximize2
  } from 'lucide-react';
  
  import Link from "next/link"
  import Image from "next/image";

export function Footer() {
    return(
        <footer className="bg-zinc-900 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
        
        {/* Musica atual */}
        <div className="flex items-center gap-3">

          {/* Imagem do album da musica atual */}
          <Link href="#">
          <Image src="/pinkFloyd-musica.png" width={56} height={56} alt="Capa do álbum The Wall da banda Pink Floyd" />
          </Link>
          
          {/* Titulo e artista da musica atual */}
          <div className="flex flex-col">
            
            <Link href="#">
            <strong className="font-normal">Another Brick in the Wall, part 2</strong>
            </Link>
            
            <Link href="#">
            <span className="text-xs text-zinc-400">Pink Floyd</span>
            </Link>
        
          </div>

        </div>
        
        {/* Player da musica atual */}
        <div className="flex flex-col items-center gap-2">

          {/* Botões */}
          <div className="flex items-center gap-6">
            
            <Link href="#">
            <Shuffle size={20} className="text-green-400"/>
            </Link>

            <Link href="#">
            <SkipBack size={20} className="text-zinc-200"/>
            </Link>

            <button className="w-10 h-10 items-center justify-center pl-2.5 rounded-full bg-white text-black">
              <Play />
            </button>

            <Link href="#">
            <SkipForward size={20} className="text-zinc-200"/>
            </Link>

            <Link href="#">
            <Repeat size={20} className="text-zinc-200"/>
            </Link>

          </div>

          {/* Linha do tempo da musica atual */}
          <div className="flex items-center gap-2">

            <span className="text-xs text-zinc-400">0:31</span>

            <Link href="#" className="h-1 rounded-full w-96 bg-zinc-600">

              <div className="bg-zinc-200 w-40 h-1 rounded-full"></div>

            </Link>

            <span className="text-xs text-zinc-400">3:18</span>

          </div>

        </div>
        

        {/* Botões */}
        <div className="flex items-center gap-4">
          <Link href="#">
          <Mic2 size={20}/>
          </Link>

          <Link href="#">
          <LayoutList size={20}/>
          </Link>

          <Link href="#">
          <Laptop2 size={20}/>
          </Link>
          
          <div className="flex items-center gap-2">

            <Link href="#">
            <Volume size={20}/>
            </Link>

            <Link href="#" className="h-1 rounded-full w-24 bg-zinc-600">

              <div className="bg-zinc-200 w-10 h-1 rounded-full"></div>

            </Link>

          </div>

          <Link href="#">
          <Maximize2 size={20}/>
          </Link>
          
        </div>
      
      </footer>
    )
}