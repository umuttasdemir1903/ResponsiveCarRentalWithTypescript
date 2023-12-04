import { useState } from "react";
import { CarType } from "../../types";
import CustomButton from "../CustomButton";
import DetailModal from "./DetailModal";
import { generateImage } from "../../utils/generateImage";
import { motion } from "framer-motion";

interface ICardProps {
  car: CarType;
}

const Card = ({ car }: ICardProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <motion.div
      initial={{
        scale: 0.5,
        opacity: 0,
      }}
      whileInView={{
        scale: 1,
        opacity: 1,
      }}
      className="car-card group"
    >
      {/* araba ismi */}
      <h2 className="car-card__content-title">
        {car.make} {car.model}
      </h2>

      {/* araba fiyat */}
      <p className="flex mt-6 text-[26px]">
        <span className="text-[15px]">$</span>
        {Math.round(Math.random() * 5000) + 750}
        <span className="text-[15px] self-end">/Daily</span>
      </p>

      {/* resim alanı */}
      <div className="relative w-full h-40 my-3">
        <img
          src={generateImage(car)}
          className="w-full h-full object-contain"
        />
      </div>

      {/* alt kısım */}
      <div className="relative flex w-full mt-2">
        {/* iconlar */}
        <div className="group-hover:invisible flex justify-between text-gray-500 w-full">
          <div className="flex flex-col justify-center items-center gap-2">
            <img width={25} src="/steering-wheel.svg" />
            <p className="text-[16px]">
              {car.transmission === "a" ? "Automatic" : "Manuel"}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <img width={25} src="/tire.svg" />
            <p className="text-[16px]">{car.drive}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <img width={25} src="/gas.svg" />
            <p className="text-[16px]">{car.fuel_type}</p>
          </div>
        </div>
        {/* button */}
        <div className="w-full group-hover:flex hidden absolute bottom-0 z-10  text-white font-bold">
          <CustomButton
            title="More Info"
            designs="w-full bg-purple-700 hover:bg-purple-800"
            rIcon="right-arrow.svg"
            handleClick={() => setIsModalOpen(true)}
          />
        </div>
      </div>

      {/* modal */}
      <DetailModal
        car={car}
        isOpen={isModalOpen}
        close={() => setIsModalOpen(false)}
      />
    </motion.div>
  );
};

export default Card;
