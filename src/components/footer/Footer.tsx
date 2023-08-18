import { useEffect } from "react";
import AOS from "aos";
import ilustratorImg from "@assets/hero-illustration.svg";
import logo from "@assets/ICONO-EDTplus.png";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <footer className="relative">
        <div className="bg-slate-800 inset-0">
          <div className="z-50 absolute left-1/2 top-1/2 max-md:hidden">
            <img
              className=""
              src={ilustratorImg}
              alt=""
              width={600}
              height={400}
            />
          </div>
          <div
            className="mx-14 max-w-full px-6 max-md:mx-3 max-md:px-3"
            data-aos="fade-up"
          >
            <div className="footer-block grid grid-cols-10 py-8 rounded-tt border-t border-slate-700 max-md:grid-cols-1 max-md:gap-6">
              <div className="logo">
                <a href="#">
                  <img src={logo} width={70} height={70} alt="" />
                </a>
              </div>
              <div className="col-span-2 text-sm max-md:col-auto block">
                <h6 className="text-white font-bold mb-3">
                  Acerca de la empresa
                </h6>
                <ul className="text-slate-500">
                  <li className="w-[70%] mb-2 hover:text-[#ffcd00cc] hover:font-normal hover:duration-500">
                    <a href="#">¿Qué es EDTecnica?</a>
                  </li>
                  <li className="w-[70%] mb-2 hover:text-[#ffcd00cc] hover:font-normal hover:duration-500">
                    <a href="#">El equipo</a>
                  </li>
                  <li className="w-[70%] mb-2 hover:text-[#ffcd00cc] hover:font-normal hover:duration-500">
                    <a href="#">Los profesores</a>
                  </li>
                  <li className="w-[70%] mb-2 hover:text-[#ffcd00cc] hover:font-normal hover:duration-500">
                    <a href="#">Enunciado de misión</a>
                  </li>
                  <li className="w-[70%] mb-2 hover:text-[#ffcd00cc] hover:font-normal hover:duration-500">
                    <a href="#">Marca y logotipo</a>
                  </li>
                  <li className="w-[70%] mb-2 hover:text-[#ffcd00cc] hover:font-normal hover:duration-500">
                    <a href="#">Cultura</a>
                  </li>
                </ul>
              </div>
              <div className="col-span-2 text-sm max-md:col-auto block">
                <h6 className="text-white font-bold mb-3">
                  Conecta con EDTecnica
                </h6>
                <ul className="text-slate-500">
                  <li className="w-[70%] mb-2 hover:text-[#ffcd00cc] hover:font-normal hover:duration-500">
                    <a href="#">Soporte al cliente</a>
                  </li>
                  <li className="w-[70%] mb-2 hover:text-[#ffcd00cc] hover:font-normal hover:duration-500">
                    <a href="#">Políticas de privacidad</a>
                  </li>
                  <li className="w-[70%] mb-2 hover:text-[#ffcd00cc] hover:font-normal hover:duration-500">
                    <a href="#">Terminos y condiciones</a>
                  </li>
                  <li className="w-[70%] mb-2 hover:text-[#ffcd00cc] hover:font-normal hover:duration-500">
                    <a href="#">Política de reembolsos</a>
                  </li>
                  <li className="w-[70%] mb-2 hover:text-[#ffcd00cc] hover:font-normal hover:duration-500">
                    <a href="#">Servicios para colegios y universidades</a>
                  </li>
                </ul>
              </div>
              <div className="col-span-2 text-sm max-md:col-auto">
                <h6 className="text-white font-bold mb-3">
                  Nuestros productos
                </h6>
                <ul className="text-slate-500">
                  <li className="w-[70%] mb-2 hover:text-[#ffcd00cc] hover:font-normal hover:duration-500">
                    <a href="#">Servicios para empresas</a>
                  </li>
                  <li className="w-[70%] mb-2 hover:text-[#ffcd00cc] hover:font-normal hover:duration-500">
                    <a href="#">Canjea cupones</a>
                  </li>
                  <li className="w-[70%] mb-2 hover:text-[#ffcd00cc] hover:font-normal hover:duration-500">
                    <a href="#">Regala cursos</a>
                  </li>
                  <li className="w-[70%] mb-2 hover:text-[#ffcd00cc] hover:font-normal hover:duration-500">
                    <a href="#">Consigue empleo con nosotros</a>
                  </li>
                </ul>
              </div>
              <div className="col-span-2 text-sm max-md:col-auto">
                <h6 className="text-white font-bold mb-3">Recursos gratis</h6>
                <ul className="text-slate-500">
                  <li className="w-[70%] mb-2 hover:text-[#ffcd00cc] hover:font-normal hover:duration-500">
                    <a href="#">Cursos gratis</a>
                  </li>
                  <li className="w-[70%] mb-2 hover:text-[#ffcd00cc] hover:font-normal hover:duration-500">
                    <a href="#">Blog</a>
                  </li>
                  <li className="w-[70%] mb-2 hover:text-[#ffcd00cc] hover:font-normal hover:duration-500">
                    <a href="#">Master Class</a>
                  </li>
                  <li className="w-[70%] mb-2 hover:text-[#ffcd00cc] hover:font-normal hover:duration-500">
                    <a href="#">Comunidad</a>
                  </li>
                  <li className="w-[70%] mb-2 hover:text-[#ffcd00cc] hover:font-normal hover:duration-500">
                    <a href="#">EDTecnica</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="pb-8">
              <div className="text-xs text-slate-500 max-md:text-center">
                <p>Torre Parque Cristal - Ala Oeste - Caracas - Venezuela</p>
              </div>
              <div className="social"></div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export { Footer };
