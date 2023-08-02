import React from "react";
import ilustratorImg from "../../assets/hero-illustration.svg";
import logo from "../../assets/Logo EDTecnica.svg";
const Footer = () => {
  return (
    <>
      <footer className="relative">
        <div className="bg-slate-800 inset-0">
          <div className="z-[-10] absolute left-1/2 bottom-0">
            <img
              className=""
              src={ilustratorImg}
              alt=""
              width={600}
              height={400}
            />
          </div>
          <div className="mx-14 max-w-full px-6">
            <div className="footer-block grid grid-cols-10 py-8 rounded-tt border-t border-slate-700">
              <div className="logo">
                <a href="#">
                  <img src={logo} width={50} height={50} alt="" />
                </a>
              </div>
              <div className="col-span-2 text-sm">
                <h6 className="text-white font-bold mb-3">
                  Acerca de la empresa
                </h6>
                <ul className="text-slate-500">
                  <li className="mb-2">
                    <a href="#">¿Qué es EDTecnica?</a>
                  </li>
                  <li className="mb-2">
                    <a href="#">El equipo</a>
                  </li>
                  <li className="mb-2">
                    <a href="#">Los profesores</a>
                  </li>
                  <li className="mb-2">
                    <a href="#">Enunciado de misión</a>
                  </li>
                  <li className="mb-2">
                    <a href="#">Marca y logotipo</a>
                  </li>
                  <li className="mb-2">
                    <a href="#">Cultura</a>
                  </li>
                </ul>
              </div>
              <div className="col-span-2 text-sm">
                <h6 className="text-white font-bold mb-3">
                  Conecta con EDTecnica
                </h6>
                <ul className="text-slate-500">
                  <li className="mb-2">
                    <a href="#">Soporte al cliente</a>
                  </li>
                  <li className="mb-2">
                    <a href="#">Políticas de privacidad</a>
                  </li>
                  <li className="mb-2">
                    <a href="#">Terminos y condiciones</a>
                  </li>
                  <li className="mb-2">
                    <a href="#">Política de reembolsos</a>
                  </li>
                  <li className="mb-2">
                    <a href="#">Servicios para colegios y universidades</a>
                  </li>
                </ul>
              </div>
              <div className="col-span-2 text-sm">
                <h6 className="text-white font-bold mb-3">
                  Nuestros productos
                </h6>
                <ul className="text-slate-500">
                  <li className="mb-2">
                    <a href="#">Servicios para empresas</a>
                  </li>
                  <li className="mb-2">
                    <a href="#">Canjea cupones</a>
                  </li>
                  <li className="mb-2">
                    <a href="#">Regala cursos</a>
                  </li>
                  <li className="mb-2">
                    <a href="#">Consigue empleo con nosotros</a>
                  </li>
                </ul>
              </div>
              <div className="col-span-2 text-sm">
                <h6 className="text-white font-bold mb-3">Recursos gratis</h6>
                <ul className="text-slate-500">
                  <li className="mb-2">
                    <a href="#">Cursos gratis</a>
                  </li>
                  <li className="mb-2">
                    <a href="#">Blog</a>
                  </li>
                  <li className="mb-2">
                    <a href="#">Master Class</a>
                  </li>
                  <li className="mb-2">
                    <a href="#">Comunidad</a>
                  </li>
                  <li className="mb-2">
                    <a href="#">EDTecnica</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="pb-8">
              <div className="text-xs text-slate-500">
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
