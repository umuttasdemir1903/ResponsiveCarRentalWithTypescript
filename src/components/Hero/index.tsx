import { motion } from "framer-motion";
import CustomButton from "../CustomButton";

const Hero = () => {
  const flyTo = (): void => {

  };

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x max-h-[720px]">
        <h1 className="hero__title">Feel Freedom , Start Travelling</h1>
        <p className="hero__subtitle text-gray-300">
          Ready for an unforgettable journey with gold standard service Are you?
          Experience car hire with Gold Options You can make every moment
          special by crowning it.
        </p>
    
        <CustomButton
          title="Explore Cars"
          designs="mt-5 bg-green-700 hover:bg-green-800"
          handleClick={flyTo}
        />
      
      </div>
      <div className="flex justify-center">
        <motion.img
          initial={{
            translateX: 200,
            scale: 0.7,
          }}
          animate={{
            translateX: 0,
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="object-contain"
          src="/hero.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
