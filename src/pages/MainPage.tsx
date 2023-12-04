import CustomFilter from "../components/CustomFilter";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import { useEffect, useState } from "react";
import { fetchCars } from "../utils/FetchCars";
import { CarType } from "../types";
import Card from "../components/Card";
import ShowMore from "../components/ShowMore";
import { useSearchParams } from "react-router-dom";
import { fuels, years } from "../constant";

const MainPage = () => {
  const [params] = useSearchParams();
  // useState bizden state'de tutacağımız verinin tipini ister
  // bizde generic yardımıyla bir CarType dizisini state'de tutacağımızı söyledik
  const [cars, setCars] = useState<CarType[] | null>(null);
  const [isError, setIsError] = useState<boolean>(false);

  // bileşen ekrana basılınca ve params değişince api isteği at
  useEffect(() => {
    // urldeki bütün parametreleri al objeye oluştur
 const paramsObj =  Object.fromEntries(params.entries())
    fetchCars(paramsObj)
      // istek başarılı olursa state'a aktar
      .then((data) => setCars(data))
      // istek başarısız olursa
      .catch(() => setIsError(true));
  }, [params]);


  return (
    <div>
      <Hero />

      <div id="catalogue" className="mt-12 padding-x padding-y max-width">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Discover cars you might like </p>
        </div>

        {/* filtreleme alanı */}
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title='Fuel Type' options={fuels}/>
            <CustomFilter title='Model' options={years}/>
          </div>
        </div>

        {/* hata olursa ekrana bas */}
        {isError && (
          <div className="home__error-container">
            <h2>An error occurred </h2>
          </div>
        )}

        {/* 
           1) Veri nullsa > henüz apiden cevap gelememiştir
           2) IsError true ise > api'den cevabı alırken hata olmuuştur
           3) Veri Boş diziyse > Kriterlere uygun eleman bulunamadı
           4) Veri dolu diziyse > veri başarıyla geldi
        */}

        {!cars ? (
          <div className="home__error-container">
            <h2>Loading...</h2>
          </div>
        ) : isError ? (
          <div className="home__error-container">
            <h2>No cars were found for your search criteria </h2>
          </div>
        ) : cars.length < 1 ? (
          <div className="home__error-container">
            <h2>No cars were found for your search criteria </h2>
          </div>
        ) : (
          <section>
            <div className="home__cars-wrapper">
              {cars.map((car, i) => (
                <Card car={car} key={i} />
              ))}
            </div>
            <ShowMore />
          </section>
        )}
      </div>
    </div>
  );
};

export default MainPage;
