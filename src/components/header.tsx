import { AlignJustify, Search, ShoppingCart } from "lucide-react";

import Image from "next/image";
export function Header() {
  return (
    <header>
      <div className="grid text-white">
        <div className="flex flex-wrap md:flex-no-wrap bg-darkblue-900 px-3 py-2 items-center">
          <div className="flex mx-2 font-semibold py-2 border border-transparent">
            <Image
              className="h-7"
              src={"/amazon_logo.png"}
              width={105}
              height={10}
              quality={100}
              alt="amazon s/a "
            />
            <span className="text-xs pl-1 pt-1">.com.br</span>
          </div>
          <div className="hidden md:block  sm:border-red-200 lg:border-blue-500 xl:border-green-500 sm:w-[73%] xl:w-[18%] lg:w-[27%] pb-1 text-xs border border-transparent hover:border-white rounded-sm p-2 ">
            <p className="leading-3">
              A entrega será feita em guarulhos 08583450
            </p>
            <p className="font-extrabold">Atualizar Local</p>
          </div>
          <div
            className="w-full  md:w-auto
          flex-grow md:ml-3 mr:0 pt-1 order-2 md:order-none"
          >
            <form action="" className="flex">
              <select
                name=""
                id=""
                className="hidden md:block p-2 text-xs text-gray-700
                 bg-gray-100 hover:bg-gray-300 rounded-tl rounded-bl border-r border-gray-500"
              >
                <option value="Livros">Livros</option>
              </select>
              <input
                type="text"
                placeholder="Pesquiser na Amazon.com.br"
                className="p-2 flex-grow rounded-l md:rounded-none"
              />
              <button className="px-4 bg-gold-100 hover:bg-gold-200 rounded-tr rounded-br">
                <Search className="h-4" color="#232F3E" />
              </button>
            </form>
          </div>
          <div className="hidden md:block ml-1 pb-1 text-xs border border-transparent hover:border-white rounded-sm p-2">
            <p className="leading-3">Olá faça o seu Login</p>
            <p className="font-extrabold">Contas e Listas</p>
          </div>
          <div className="hidden md:block  pb-1 text-xs border border-transparent hover:border-white rounded-sm p-2">
            <p className="leading-3">Devoluçoes </p>
            <p className="font-extrabold">e pedidos</p>
          </div>

          <div
            className="pb-1 border py-1.5 border-transparent items-center hover:border-white rounded-sm absolute
          right-0 top-0 mr-2 mt-2 md:mr-0 md:mt-0 md:relative order-1 md:order-none md:flex"
          >
            <ShoppingCart />
          </div>
        </div>
        <div className="flex bg-darkblue-700 p-1 items-center justify-between">
          <div>
            <ul className="flex gap-3  text-sm mx-2 items-center">
              <li>
                <div className="flex items-center">
                  <AlignJustify className="pr-0.5" />
                  <span className="font-semibold">Todos</span>
                </div>
              </li>
              <li>Venda na Amazon</li>
              <li>Mais vendidos</li>
              <li>Ofertas do dia</li>
              <li>Prime</li>
              <li>Livros</li>
              <li>Musica</li>
              <li className=" md:block">Ideias de presente</li>
              <li className=" md:block">Eletronicos</li>
            </ul>
          </div>
          <div className="mr-5 hidden lg:block">
            <p className="text-xl">
              Ouça{" "}
              <span className="font-bold text-gold-200">
                O pequeno Principe
              </span>
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
