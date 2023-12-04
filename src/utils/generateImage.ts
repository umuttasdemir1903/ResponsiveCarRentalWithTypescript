import { colors } from "../constant";
import { CarType } from "../types";

//* Bize parametre olarka gelen her bir araba için
//* arabanın fotoğrafının linkini oluşturucasz
//? temel url: https://cdn.imagin.studio/getimage
//* arabanın bilgilerine göre elde etmek istediğimiz:
//? TEMEL_URL?customer=hrjavascript-mastery&make=bmw&modelFamily=m4

export const generateImage = (car: CarType, angle?: string): string => {

    // url sınıfının özelliklerine erişebilmek için bir örnek oluşturduk
    // örnek oluştururken temel url parameter olarak gönderiyoruz
  const url: URL = new URL("https://cdn.imagin.studio/getimage");

  // dinamik bir şekilde url parametre ekleme
  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("make", car.make);
  url.searchParams.append("modelFamily", car.model.split('/')[0].split(' ')[0]);
  url.searchParams.append("zoomType", "fullscreen");

  if (angle) {
    url.searchParams.append("angle", angle);
  }

  // rastegele bir renk seç ve ekle
 const index =  Math.round(Math.random () * colors.length) 
  url.searchParams.append("paintId", colors[index]);



  // oluşturduğumuz url değerini döndür
  return url.href;
};
