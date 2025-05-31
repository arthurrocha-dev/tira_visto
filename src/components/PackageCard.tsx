import type { Package } from "../interfaces/package";
import { Card } from "flowbite-react";
import { Button } from "./Button";

interface PackageCardProps {
  data: Package;
}
export const PackageCard = ({ data }: PackageCardProps) => {
  return (
    <Card
      className="max-w-full md:max-w-sm  text-sm md:text-md"
      imgAlt={data.title}
      imgSrc={data.imageUrl}
    >
      <div className="flex items-center gap-2">
        <p
          className={`border rounded-full ${
            data.category === "basic"
              ? "border-black text-black"
              : "border-grey text-grey"
          } px-[20px] py-[5px]`}
        >
          Basic
        </p>
        <p
          className={`border rounded-full ${
            data.category === "premium"
              ? "border-black text-black"
              : "border-grey text-grey"
          } px-[20px] py-[5px]`}
        >
          Premium
        </p>
      </div>

      <p className="font-bold text-2xl">{data.title}</p>

      <div className="flex items-center justify-between">
        <div>
          <p className="font-bold">Atendimento</p>
          <p>{data.service}</p>
        </div>
        <div>
          <p className="font-bold">Tempo</p>
          <p>{data.duration}</p>
        </div>
      </div>
      <hr className="mt-4 mb-2 text-ligth-grey" />

      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div className="mb-2 md:mb-auto">
          <p className="text-grey">A partir de</p>
          <p className="font-bold text-3xl">R$ {data.price}</p>
        </div>
        <Button type="secondary">Contratar</Button>
      </div>
    </Card>
  );
};
