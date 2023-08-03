import { ButtonPrimary } from "../button/ButtonPrimary";
import logo from "./../../assets/Logo EDTecnica.svg";

const Header = () => {
  return (
    <>
      <header className="header-container w-full max-w-6xl mx-14 my-6 absolute z-30">
        <div className="flex items-center justify-between px-6">
          <div className="logo">
            <a href="#">
              <img src={logo} alt="" width={50} height={50} />
            </a>
          </div>
          <div className="button">
            <ButtonPrimary
              title={`Soy Estudiante`}
              link="https://edtecnica.info/"
              backgroundColor="bg-slate-800"
              style={"text-white py-2 px-4 rounded-full mr-4"}
            />
          </div>
        </div>
      </header>
    </>
  );
};

export { Header };
