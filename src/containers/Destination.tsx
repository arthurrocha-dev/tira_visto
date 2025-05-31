import { Button } from "../components/Button";
import MuibaImg from "../assets/destinations/Frame 36944.png";
import BaliImg from "../assets/destinations/Frame 36945.png";
import NYImg from "../assets/destinations/Frame 36946.png";
import SantImg from "../assets/destinations/Frame 36947.png";
import ParisImg from "../assets/destinations/Frame 36948.png";
import CCImg from "../assets/destinations/Frame 36948.png";

export const Destination = () => {
  return (
    <section className="px-[20px] lg:px-[60px]">
      <div className="bg-[url('../assets/39789.png')] bg-cover bg-top w-full">
        <div className="flex justify-center">
          <Button type="primary">Top Destinos</Button>
        </div>

        <div className="text-center mt-2 mb-4 md:mb-[40px]">
          <h4 className="font-bold text-3xl md:text-5xl m-1 md:mb-3">
            Destinos mais procurados
          </h4>
          <p className="text-grey">
            Confira os destinos mais procurados por nossos clientes nos últimos
            meses, qual seria o seu novo destino?
          </p>
        </div>
        <div className="flex justify-center">
          <Button type="secondary">Conheça mais</Button>
        </div>
      </div>

      <div className="mt-6 mb:mt-[60px] mx-auto">
        <div className="flex flex-col md:flex-row gap-3 items-end w-full md:w-2/3 mx-auto ">
          <div className="w-full md:w-1/3 aspect-square md:aspect-[1/0.85] overflow-hidden rounded-[28px]">
            <img src={MuibaImg} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="w-full md:w-1/3 aspect-square overflow-hidden rounded-[28px]">
            <img src={BaliImg} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="w-full md:w-1/3  aspect-square md:aspect-[1/0.85] overflow-hidden rounded-[28px]">
            <img src={NYImg} alt="" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-3 items-start w-full md:w-2/3 mx-auto mt-4">
          <div className="w-full md:w-1/3 aspect-square md:aspect-[1/0.85] overflow-hidden rounded-[28px]">
            <img src={SantImg} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="w-full md:w-1/3 aspect-square overflow-hidden rounded-[28px]">
            <img src={ParisImg} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="w-full md:w-1/3  aspect-square md:aspect-[1/0.85] overflow-hidden rounded-[28px]">
            <img src={CCImg} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};
