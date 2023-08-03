import logo from "../../assets/ICONO-EDTplus.png";

const TypesOfStudies = () => {
  return (
    <>
      <section>
        <div className="typeofstudies-container">
          <div className="items-container mx-14 py-4">
            <div className="pt-20 pb-20">
              <div className="mb-20 max-w-1xl">
                <h2 className="text-6xl font-bold mb-4 text-[#ffcd00]">
                  ¿Qué es educación{" "}
                  <span className="text-[#0072ce] font-bold [-webkit-text-stroke:3px_#bae6fd]">
                    STEAM
                  </span>{" "}
                  en EDTPlus?
                </h2>
              </div>
              <div className="items-grid grid grid-cols-2 gap-0 divide-x divide-slate-300">
                <div className="item px-9 h-[500px]">
                  <iframe
                    className="w-full h-full"
                    src="https://www.instagram.com/p/Cu5UhpjA37U/embed/"
                  ></iframe>
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export { TypesOfStudies };
