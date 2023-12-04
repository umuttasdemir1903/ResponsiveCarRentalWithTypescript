import { CarType } from "../../types";
import { generateImage } from "../../utils/generateImage";
import { motion, AnimatePresence } from "framer-motion";

type ModalPropsType = {
  car: CarType;
  isOpen: boolean;
  close: () => void;
};

const DetailModal = ({ car, isOpen, close }: ModalPropsType) => {
  return (
    // Modal açıksa ekrana bas
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-20 z-20 grid place-items-center p-4">
          <motion.div
            initial={{
              scale: 0.3,
              opacity: 0,
            }}
            whileInView={{
              scale: 1,
              opacity: 1,
            }}
            exit={{
              scale: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.4,
            }}
            className="p-6 relative bg-white w-full max-w-lg max-h[90vh] rounded-2xl flex flex-col gap-5 shadow-xl overflow-auto"
          >
            {/* kapatma butonu */}
            <button
              onClick={close}
              className="cursor-pointer p-1 absolute end-1 top-1 z-10 bg-white rounded-full"
            >
              <img src="/close.svg" alt="" />
            </button>

            {/* foto alanı */}
            <div className="flex-1 flex flex-col gap-3">
              {/* büyük resim */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5 }}
                className="w-full h-40 bg-pattern bg-cover bg-center rounded-lg"
              >
                <img
                  className="h-full mx-auto object-contain"
                  src={generateImage(car)}
                />
              </motion.div>
              {/* küçük resimler */}
              <div className="flex gap-3">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, rotateX:200}}
                  animate={{ opacity: 1, scale: 1, rotateX:0}}
                  transition={{ duration: 2 }}
                  className="flex-1 flex relative h-24 rounded-lg bg-gray-200 "
                >
                  <img
                    className="h-full mx-auto object-contain"
                    src={generateImage(car, "29")}
                  />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5, rotateX:200}}
                    animate={{ opacity: 1, scale: 1,   rotateX:0}}
                  
                  transition={{ duration: 2.5 }}
                  className="flex-1 flex relative h-24 rounded-lg bg-gray-200 "
                >
                  <img
                    className="h-full mx-auto object-contain"
                    src={generateImage(car, "33")}
                  />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5, rotateX:200}}
                    animate={{ opacity: 1, scale: 1, rotateX:0}}
                  transition={{ duration: 3.5 }}
                  className="flex-1 flex relative h-24 rounded-lg bg-gray-200 "
                >
                  <img
                    className="h-full mx-auto object-contain"
                    src={generateImage(car, "13")}
                  />
                </motion.div>
              </div>
            </div>

            {/* Araç bilgileri */}
            {/*
             * Objenin değerlerini tek tek yazmamak için
             * Object.entries() method ile objeyi diziye çevirdik ve diziyi döndük.
             * Entries methodu sonuç olarak verdiğimiz objenin
             * anahtar ve değerlerinde oluşan bir dizi döndürür
             * örn {id:3,name:"ahmet"} için:
             * sonuç: [["id",3],["name","ahmet"]]
             */}
            <div className="flex flex-col gap-2">
              {Object.entries(car) // 'entries' objeyi diziye çevirir
                // year değerini sildik
                .filter(([key]) => key != "year")
                .map(([key, value]) => (
                  <div className="flex justify-between">
                    <h4 className="capitalize text-gray-600">
                      {key.replace("_", " ")}
                    </h4>
                    <p className="capitalize text-black font-semibold">
                      {value}
                    </p>
                  </div>
                ))}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default DetailModal;
