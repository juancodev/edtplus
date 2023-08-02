import React from "react";
import logo from "../../assets/Logo EDTecnica.svg";

const TypesOfStudies = () => {
  return (
    <>
      <section>
        <div className="typeofstudies-container">
          <div className="items-container mx-14 py-4">
            <div className="pt-28 pb-20">
              <div className="items-grid grid grid-cols-3 gap-0 divide-x divide-slate-300">
                <div className="item px-9">
                  <div className="image mb-3">
                    <img src={logo} alt="" width={50} height={50} />
                  </div>
                  <h4 className="text-xl font-bold mb-1 text-slate-800">
                    EDT Presential
                  </h4>
                  <p className="text-slate-500">
                    Varios programas tech están disponibles para ti, desde
                    marketing, diseño, programación para acceder a un mundo de
                    oportunidades.
                  </p>
                </div>
                <div className="item px-9">
                  <div className="image mb-3">
                    <img src={logo} alt="" width={50} height={50} />
                  </div>
                  <h4 className="text-xl font-bold mb-1 text-slate-800">
                    EDT Plus
                  </h4>
                  <p className="text-slate-500">
                    Un programa educativo para adolescentes a través del cual
                    puedan desarrollar habilidades tech.
                  </p>
                </div>
                <div className="item px-9">
                  <div className="image mb-3">
                    <img src={logo} alt="" width={50} height={50} />
                  </div>
                  <h4 className="text-xl font-bold mb-1 text-slate-800">
                    EDT Online
                  </h4>
                  <p className="text-slate-500">
                    Carreras y cursos 100% online para quienes quieren estudiar
                    desde cualquier parte del mundo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export { TypesOfStudies };
