## Conceitos 

- layout: Estruturas que se repetem, por exemplo, header


## Tailwind 

- Recomendo baixar a extenção tailwind no seu visual studio para conseguir visualizar as classes a medida com que digita.

- Pode utilizar o Ctrl+space para visualizar as possivies classes.

- Pode também repousar seu mouse em cima de uma classe tailwind que ele apresenta um reviw da sua funcionalidade.

# BackGound

- bg-zinc-800: background cinza com 800 de "força" (tonalidade)

- bg-black/40: adiciona um background preto com uma opacidade representada pelo /40

# Text

- text-zinc-50: text cinza com 50 de "força (tonalidade)

- text-xs: modifica o tamanho da font para extra small (xs)

- text-sm: modifica o tamanho da font para small (sm)

- text-4xl: modifica o tamanho da font para extra large (xl) com o tamanho 4

- font-semibold: adiciona a font um semi-negrito

- font-bold: adicona uma fonte em negrito

- font-normal: retira as formatações (negrito ou italico) e deixa a font "normal"

# Layout

- flex: irá deixar o layout flexivél, equivalente ao display:flex;

- flex-1: faz com que a div filho ocupe o espaço da div pai

- flex-col: irá cria um layout em coluna, equivalente a flex-direction: colun

- grid: irá criar um layout de grid, equivalente ao display: grid;

- grid-cols-3: especifica que serão 3 colunas nesse formato grid

# Border

- border-t: adiciona a borda na região top

- border-zinc-700: colore a borda

- rounded-full: deixa o elemento com a borda totalmente aredondada

# Width e Heigth

- w-64: define a largura (width) de 256px (O número 64 equivale a 4*6 em px. É uma convensão em Desing usar multiplos de 4)

- h-6: define a altura (heigth) de 12px

- h-screen: irá preencher verticalmente a altura da tela

# Margin e Padding

- p-6: adiciona um padding em todas as direções de tamanho 6px, equivale ao padding: 24px;

- px-6: adiciona um padding nas direções horizontais (left e right) representadas no eixo x

- py-6: adiciona um padding nas direções verticais (top e bottum) representadas no eixo y

- pt-10: adiciona um padding top de 40px, equivale ao padding-top: 40px;

- pl-1: adiciona um padding left de 4px, equivale ao padding-left: 4px;

- ml-auto: adiciona uma margin left automática, equivale ao margin-left: auto;

- mt-10: adiciona um margin top de 40px, equivale ao margin-top: 40px;

# Align 

- items-center: alinha os itens ao centro de forma vertical

- justify-center: alinha os itens ao centro de forma horizontal

- justify-between: cria um espaço entre os elementos

- gap-2: espaço entre os objetos

- space-y-4: faz o espaçamento entre elementos utilizando o eixo y

# Hover

- hover:text-zinc-100: irá trocar a cor do texto para um cinza de tonalidade 100 quando o mouse passar por cima do mesmo

- group: adiciona ao elemento um grupo

- invisible: deixa o elemento invisivel, equivale ao display:none;

- group-hover:visible: ao passar o mouse por cima do elemento group deixa visivel o elemento

# Outros

- overflow-hidden: impede que o conteúdo ultrapasse os limites de seu elemento pai

- transition-colors: aplica uma transição suave quando ocorre uma mudança de cor

## Next

# Link

import {Search} from 'lucide-react'

<Link href="/search">
    <Search/>
    Search
</Link>

- Utilização utilizando link
- lucide-react: é uma biblioteca de icons 

# Image

import Image from 'next/image';

<div className="bg-white/10 rounded">
<Image src="/acdc-album.png" width={80} height={80} alt="Capa do álbum Black in Black da banda AC/DC"/>
</div>