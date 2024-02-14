import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div
      className=" px-4 bg-amazon-theme h-svh bg-top -mt-4 bg-no-repeat bg-contain "
      style={{ backgroundSize: "1500px auto" }}
    >
      <div className="container mx-auto">
        <div className="  flex items-center mt-4 h-[240px] justify-between ">
          <span className="flex p-4  h-full items-center hover:border-green-950 hover:border-2 ml-1 ">
            <ChevronLeft width={40} height={40} />
          </span>
          <span className="flex p-4  h-full items-center hover:border-green-950 hover:border-2 mr-1 ">
            <ChevronRight width={40} height={40} />
          </span>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-3 mx-5 ">
          <div className="flex flex-col bg-white pt-5 px-4 h-[430px] items-start">
            <h3 className="font-bold text-xl">Ofertas do Dia, de A a Z</h3>

            <div className="inner-div w-full bg-red-500 h-full mt-2">
              <Image
                src={"/mulher.jpg"}
                width={300}
                height={700}
                alt=""
                quality={100}
                className="h-full object-cover md:w-full"
              />
            </div>
            <div className="flex-1 w-full ">
              <p className="text-xs py-6 font-semibold text-[#11497aee]">
                Veja todas as ofertas
              </p>
            </div>
          </div>
          <div className="flex flex-col bg-white pt-6 px-5 h-[430px] items-start">
            <h3 className="font-bold text-xl">Ofertas Só no app</h3>

            <div className="inner-div w-full mt-2  flex justify-center items-center">
              <Image
                src={"/conjunto.jpg"}
                width={230}
                height={700}
                alt=""
                quality={100}
                className="h-full object-cover"
              />
            </div>
            <div className="flex gap-1 items-center mt-3">
              <span className="bg-red-600 text-white font-semibold text-xs p-1.5 rounded">
                29% off
              </span>
              <p className="font-semibold text-xs text-red-600">
                termina em 04:36:17
              </p>
            </div>
            <div>
              <div className="flex gap-0.5 mt-2">
                <span className="text-[10px]">R$</span>
                <p className="font-semibold">242,15</p>
                <p className="text-[11px] mt-1 text-zinc-500">
                  De: <span className="line-through">R$ 300,00</span>
                </p>
              </div>
              <div className="flex">
                <p className="text-xs">
                  Conjunto C/ 6 Pratos Raso Bio Stoneware{" "}
                </p>
              </div>
            </div>
            <div className="flex-1 w-full ">
              <p className="text-xs py-2   font-semibold text-[#11497aee]">
                Veja todas as ofertas
              </p>
            </div>
          </div>

          <div className=" bg-white p-6 h-[430px] items-start ">
            <h3 className="font-bold text-xl">
              Veja Alexa e Fire TV com a Alexa
            </h3>
            <div className="grid grid-cols-2 grid-rows-2 gap-4">
              <div className="h-[100px] mt-3">
                <Image
                  src={"/ecopop.jpg"}
                  width={120}
                  height={100}
                  alt=""
                  quality={100}
                  className="h-full object-cover"
                />
                <div className="">
                  <p className="text-xs pb">Echo Pop</p>
                </div>
              </div>
              <div className="h-[100px] mt-3">
                <Image
                  src={"/echodot.jpg"}
                  width={120}
                  height={100}
                  alt=""
                  quality={100}
                  className="h-full object-cover"
                />
                <div className="">
                  <p className="text-xs ">Echo Dot</p>
                </div>
              </div>
              <div className="h-[100px] mt-6">
                <Image
                  src={"/firetv.jpg"}
                  width={120}
                  height={100}
                  alt=""
                  quality={100}
                  className="h-full object-cover"
                />
                <div className="">
                  <p className="text-xs ">Fire Tv</p>
                </div>
              </div>
              <div className="h-[100px] mt-6">
                <Image
                  src={"/firestick.jpg"}
                  width={120}
                  height={100}
                  alt=""
                  quality={100}
                  className="h-full object-cover"
                />
                <div className="">
                  <p className="text-xs ">Fire Stick tv</p>
                </div>
              </div>
            </div>
            <div className="flex-1 w-full ">
              <p className="text-xs py-10   font-semibold text-[#11497aee]">
                Confira tudo em Dispositivos Amazon
              </p>
            </div>
          </div>
          <div className=" grid grid-cols-1 gap-6 grid-rows-8">
            <div className="bg-white row-span-3 p-5 flex flex-col items-center">
              <h3 className="font-bold text-xl ">
                Acesse uma conta para ter a melhor experiência
              </h3>

              <button className="text-zinc-800 text-[12px] mt-3 bg-yellow-350 w-full py-1.5 rounded-lg font-semibold tracking-wide">
                Fazer Login de forma Segura
              </button>
            </div>
            <div className="row-span-5 flex justify-center">
              <div className="bg-white w-[93%] flex">
                <div className="h-full w-full items-center">
                  <Image
                    src={"/firestick.jpg"}
                    width={240}
                    height={200}
                    alt=""
                    quality={100}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
