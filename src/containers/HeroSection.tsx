import { Button } from "../components/Button";
import HerroImage from "../assets/Happy tourist sightseeing city with map.png";

export const HeroSection = () => {
  return (
    <section className="px-[20px] md:px-[20px] lg:px-[60px] py-[20px] md:py-[95px]">
      <div>
        <div className="flex justify-center md:block">
          <Button type="primary">Veja como funciona</Button>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-[40px] mt-3">
          <h3 className="w-full md:w-3/4 font-bold text-4xl text-center md:text-start">
            Sua tranquilidade não tem preço!
          </h3>
          <p className="text-grey">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center mt-[20px] md:mt-[60px] gap-[32px]">
          <div className="flex-1 overflow-hidden rounded-[26px]">
            <img
              src={HerroImage}
              alt="Image de uma família, composta por um casal e sua filha"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:w-[40%]">
            <div className="p-5">
              <h4 className="font-bold text-2xl md:text-4xl mb-1 md:mb-3">
                Etapa Inicial
              </h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div className="p-5">
              <h4 className="font-bold text-2xl md:text-4xl mb-1 md:mb-3">
                Processo de Entrevista
              </h4>
              <a href="#"> + Leia mais</a>
            </div>
            <div className="p-5">
              <h4 className="font-bold text-2xl md:text-4xl mb-1 md:mb-3">
                Entrega de Documentos
              </h4>
              <a href="#"> + Leia mais</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
