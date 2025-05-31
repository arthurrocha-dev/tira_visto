import React from "react";
import { Button } from "../components/Button";

export const Destination = () => {
  return (
    <section className="px-[20px] md:px-[20px] lg:px-[60px]">
      <div className="flex justify-center">
        <Button type="primary">Top Destinos</Button>
      </div>

      <div className="text-center mt-2 mb-[40px]">
        <h4 className="font-bold text-5xl mb-3">Destinos mais procurados</h4>
        <p className="text-grey">
          Confira os destinos mais procurados por nossos clientes nos últimos
          meses, qual seria o seu novo destino?
        </p>
      </div>
      <div className="flex justify-center">
        <Button type="secondary">Conheça mais</Button>
      </div>

      <div className="mt-[60px] mx-auto">
        <div className="flex gap-3 items-end w-2/3 mx-auto ">
          <div className="w-1/3 aspect-[1/0.85] overflow-hidden rounded-[28px]">
            <img
              src="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-1/3 aspect-square overflow-hidden rounded-[28px]">
            <img
              src="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className=" w-1/3 aspect-[1/0.85] overflow-hidden rounded-[28px]">
            <img
              src="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex gap-3 items-start w-2/3 mx-auto mt-4">
          <div className="w-1/3 aspect-[1/0.85] overflow-hidden rounded-[28px]">
            <img
              src="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-1/3 aspect-square overflow-hidden rounded-[28px]">
            <img
              src="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className=" w-1/3 aspect-[1/0.85] overflow-hidden rounded-[28px]">
            <img
              src="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
