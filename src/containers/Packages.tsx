import { useEffect, useRef, useState } from "react";
import type { Package } from "../interfaces/package";
import { PackageAPI } from "../api";
import { Button } from "../components/Button";
import { PackageCard } from "../components/PackageCard";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

export const Packages = () => {
  const [packages, setPackages] = useState<Package[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  const getPackages = async () => {
    try {
      const { data } = await PackageAPI.fetchPackage();
      setPackages(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPackages();
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="px-[20px] lg:px-[60px] mt-6 md:mt-[60px]">
      <div className="flex justify-center md:block">
        <Button type="primary">Pacotes</Button>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between mt-2">
        <h4 className="font-bold text-3xl md:text-5xl">
          Confira nossos pacotes
        </h4>

        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={() => scroll("left")}
            className="flex items-center justify-center border w-[36px] h-[36px] rounded-full"
          >
            <FaArrowLeftLong />
          </button>

          <button
            onClick={() => scroll("right")}
            className="flex items-center justify-center bg-secondary w-[36px] h-[36px] rounded-full"
          >
            <FaArrowRightLong className="text-white" />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="mt-[60px] flex gap-4 overflow-x-auto no-scrollbar scroll-smooth"
      >
        {packages.map((data) => (
          <div key={data.id} className="md:min-w-[280px] md:flex-shrink-0">
            <PackageCard data={data} />
          </div>
        ))}
      </div>

      <div className="flex md:hidden justify-center items-center gap-2 my-[20px]">
        <button
          onClick={() => scroll("left")}
          className="flex items-center justify-center border w-[36px] h-[36px] rounded-full"
        >
          <FaArrowLeftLong />
        </button>

        <button
          onClick={() => scroll("right")}
          className="flex items-center justify-center bg-secondary w-[36px] h-[36px] rounded-full"
        >
          <FaArrowRightLong className="text-white" />
        </button>
      </div>
    </section>
  );
};
