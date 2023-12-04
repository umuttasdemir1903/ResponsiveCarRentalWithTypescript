import ReactSelect from "react-select";
import { makes } from "../../constant";
import { useMemo, FormEvent, useState } from "react";
import { useSearchParams } from "react-router-dom";

type ButtonProps = {
  design?: string;
};

// 1. bileşen : Buton
const SearchButton = ({ design }: ButtonProps) => {
  return (
    <button className={`ml-3 z-10${design}`}>
      <img src="/magnifying-glass.svg" width={40} height={40} />
    </button>
  );
};

// 2.Bileşen : Arama barı
const SearchBar = () => {
  const [params, setParams] = useSearchParams();
  const [make, setMake] = useState<string>("");
  const [model, setModel] = useState<string>("");

  type OptionType = {
    label: string;
    value: string;
  };
  // options şu şekilde olmalı : {[label: 'Marka', value:herhangi birşey]}
  // buradaki map kodun üst seviyesinde olduğu için state her değiştiğinde
  // yani bileşenin her renderında bu hesaplamayı  tekrar yaparız
  // halbuki hep aynı sonucu elde ediceğimizden bu performans sorunu yaratır
  const options: OptionType[] = useMemo(
    () =>
      makes.map((make) => ({
        label: make,
        value: make,
      })),
    []
  );

  // event parametrelerinin tipini kendimiz tanımlayamayız
  // çünkü çok fazla veri var bu yü<den react'da yerleşik olarak bulunan tipleri
  // kullanıyoruz
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // url'i güncellerken
    // doğrudan setParams kullandığımız için url'e daha önce eklenen
    // bütün paramları sıfırlamış oluyoruz
    setParams({
      make,
      model,
    })
  };
  return (
    <form onSubmit={handleSubmit} className="searchbar gap-3">
      <div className="searchbar__item">
        <ReactSelect
          options={options}
          onChange={(e: OptionType | null) => e && setMake(e?.value)}
          className="w-full text-black"
        />
        <SearchButton design={"sm:hidden"} />
      </div>
      <div className="searchbar__item">
        <img width={25} src="/model-icon.png" className="absolute ml-4" />
        <input
          onChange={(e) => setModel(e.target.value)}
          className="searchbar__input rounded text-black"
          type="text"
          placeholder="Exp: M5"
        />
        <SearchButton />
      </div>
    </form>
  );
};

export default SearchBar;
