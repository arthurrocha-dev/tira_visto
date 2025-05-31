import { Header } from "../components";
import Banner from "../assets/Frame 36920.png";
import CleanShot from "../assets/CleanShot 2025-05-08 at 14.28.22@2x.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { Button } from "../components/Button";
import { useEffect, useState } from "react";
import type { DashData } from "../interfaces/dash";
import { DashAPI } from "../api";

export const Home = () => {
  const [dashData, setDashData] = useState<DashData[]>();

  const getDashData = async () => {
    try {
      const { data } = await DashAPI.getData();
      setDashData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getDashData();
  }, []);

  return (
    <section className="flex">
      <div className="flex-1">
        <Header />
        <div className="px-[20px] md:px-[20px] lg:px-[60px]">
          <div className="flex flex-col md:flex-row items-center md:block">
            <div>
              <h2 className="pb-5 md:p-0 text-2xl lg:text-5xl font-bold ">
                Tire seu Visto conosco e não tenha nenhuma surpresa negativa!
              </h2>
            </div>
            <div className="block md:hidden w-full md:w-3/4 overflow-hidden rounded-[24px] bg-primary">
              <img
                src={Banner}
                alt="Banner da Home contendo a imagem de um corredor com um chafariz no centro e ao fundo uma roda gigante"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <hr className="mt-4 mb-2 md:mt-[32px] md:mb-[60px] text-ligth-grey" />

          <div className="flex flex-col md:flex-row gap-[20px] items-end">
            <div className="flex-2/3 p-[20px]">
              <p className="mb-[40px]">
                Com uma equipe altamente treinada, nós temos todos os
                procedimentos para que seu processo seja o mais tranquilo e
                rápido. Uma consultoria completa para você e sua família não ter
                nenhuma preocupação na sua viagem.
              </p>
              <Button type="secondary">
                Saiba mais <FaArrowRightLong className="text-white" />
              </Button>
            </div>
            <div className="w-full md:w-auto flex-1/3">
              <div className="overflow-hidden rounded-[16px]">
                <img
                  src={CleanShot}
                  alt="Imagem ilustrativa do vídeos "
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex items-center justify-between mt-4">
                <div>
                  <p className="font-bold">Conheça a Bruna</p>
                  <p>Ver vídeo</p>
                </div>
                <div className="flex items-center justify-center bg-secondary w-[36px] h-[36px] rounded-full">
                  <FaArrowRightLong className="text-white" />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-[90px]">
            <ul className="flex gap-[28px]">
              {dashData &&
                dashData.length > 0 &&
                dashData.map((data, index) => (
                  <li
                    key={data.id}
                    className={`flex-1 list-none ${
                      index !== dashData.length - 1
                        ? "border-r border-ligth-grey"
                        : ""
                    }`}
                  >
                    <div>
                      <p className="text-2xl font-bold">{data.value}</p>
                      <p>{data.label}</p>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex-1 hidden md:block overflow-hidden rounded-[24px] my-[20px] mr-[20px]">
        <img
          src={Banner}
          alt="Banner da Home contendo a imagem de um corredor com um chafariz no centro e ao fundo uma roda gigante"
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  );
};
