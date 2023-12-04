// Mouse olaylarında çalışan fonk tipi budur
import { MouseEventHandler } from "react";

// Tanımlanan type bileşeni karıştırcak
// düzeydeyse veya type' birden fazla bileşende ,
// dosyada kullanılıyorsa genelde şuan olduğu gibi
// ayr ı bir type dosyasında tanımlanır ve export edilir
// ihtiyacımız olan dosyalarda import edilir

// gelen propların tipini tanımlama
export type ButtonPropsType = {
  title: string;
  designs?: string;
  btnType?: "submit" | "button" | "reset"; // hem union types hem string literals kullandık
  disabled?: boolean;
  rIcon?:string;
  // bu fonk bir butoon elemanının mouse'un etkileşimiyle tetiklenen bir fonk
  handleClick?: MouseEventHandler<HTMLButtonElement>;
};

// apiden gelen araba verisinin tipi
export type CarType = {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: "rwd" | "fwd" | "awd" | "4wd";
  fuel_type: "gas" | "electricity" | "diesel";
  highway_mpg: number;
  make: string;
  model: string;
  transmission: "a" | "m";
  year: number;
};


// urldeki paramların tipi
export type FilterType = {
  make?: string;
  model?: string;
  limit?: string;
  fuel_type?: string;
  year?: string;
};

