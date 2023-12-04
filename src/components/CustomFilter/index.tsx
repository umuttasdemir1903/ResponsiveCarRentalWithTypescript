import Select from "react-select";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

type OptionType = {
  label: string;
  value: string;
};

type FilterPropType = {
  title: string;
  options: OptionType[];
};

const CustomFilter = ({ title, options }: FilterPropType) => {
  const [selected, setSelected] = useState<OptionType | null>(null);
  const [params, setParams] = useSearchParams();

  useEffect(() => {
    // url'e eklenecek parametre belirlenecek
    const key = title === "Fuel Type" ? "fuel_type" : "year";
    if (selected?.label) {
      // url'deki parametrelerin yanına yeni parametre ekler
      params.set(key, selected.value.toLowerCase());
    }else{
      // value'su yoksa url'den parametreyi kaldırır
      params.delete(key);
    }

    // url'i günceller
    setParams(params);
  }, [selected]);

  // Seçilen filtreye göre url'i güncelle
  console.log(selected);

  return (
    <div className="w-fit text-black">
      <Select
        onChange={(e) => setSelected(e)}
        className="min-w-[100px]"
        placeholder={title}
        options={options}
      />
    </div>
  );
};

export default CustomFilter;
