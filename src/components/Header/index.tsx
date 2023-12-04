import { Link} from "react-router-dom";
import CustomButton from "../CustomButton";


// react componentları her zaman jsx verisi
// dödürüdüğünden ve bir fonksiyon olduğundan
// component'ların tipini aşağıdaki gibi belirtiyoruz
// ektstra olarak parametre alıyorsa onun tipini
// de belirleriz

const Header = (): JSX.Element => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto justify-between flex items-center px-6 py-4 sm:px-16">
        <Link to={"/"}>
          <img width={60} src="bmw.png" alt="logo" />
        </Link>
        <Link to={'sign-up'}>
        <CustomButton
          title={"Sign Up"}
          designs="min-w-[110px] bg-blue-700 hover:bg-blue-800"
        />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
