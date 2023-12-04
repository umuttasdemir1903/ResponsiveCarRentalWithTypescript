import { CarType, FilterType } from "../types";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "9ecd4f6dafmsh09b03979e4a681ap1039fcjsne3cdf9f6b019",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  },
};

// asenkron işlemler yapıp sonuç döndüren fonklarda
// return tipini doğrudan yazmayız yerleşik bir react interface olan
// 'Promise' kullanırız ve bunuda generic tip olarak api isteği başarılı
// olunca elde edeceğimiz verinin tipini veririz
//şuann gelen verinin tipini bilemidiğimiz için any verdik
// apiden gelen cevabı inceledik gelen verinin tipini yazdık
// any yerine oluşturduğumuz type'ı verdik

export async function fetchCars(filters: FilterType): Promise<CarType[]> {
  // url'de parametrenin olmama durumu vrsayılan değerleri belirledik
  // undefined olmaması için varsayılan değerler vedik
  const { make = "bmw", model = "m4", limit = 4, year = "", fuel_type = "" } = filters;

  const res = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${make}&model=${model}&limit=${limit}&year=${year}&fuel_type=${fuel_type}`,
    options
  );

  return await res.json();
}
