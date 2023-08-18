import { useEffect } from "react";
import AOS from "aos";
import logo from "@assets/ICONO-EDTplus.png";
import edtplusSteam from "@assets/steam-edtecnica.mp4";
import "aos/dist/aos.css";

const Methodology = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <section>
        <div className="methodology-container max-md:w-full">
          <div className="items-container mx-14 py-4 max-md:mx-4">
            <div className="pt-20 pb-20 max-md:pt-10 max-md:pb-10">
              <div className="mb-20 max-w-1xl max-md:mb-10">
                <div className="items-grid grid grid-cols-2 gap-0 divide-x divide-slate-300 max-md:grid-cols-1 max-md:grid-rows-2 max-md:divide-y max-md:divide-x-0 max-md:gap-4">
                  <div className="item px-9 h-[500px] w-full max-md:px-4 max-md:h-full">
                    <video
                      className="w-full h-full"
                      src={edtplusSteam}
                      autoPlay
                      loop
                    ></video>
                  </div>
                  <div
                    className="w-full max-sm:w-full max-md:w-[85%]"
                    data-aos="fade-up"
                  >
                    <h2 className="text-3xl font-bold mb-4 text-slate-800 text-center max-md:mt-2">
                      A tus hijos les encantará
                    </h2>
                    <div className="h-full grid grid-rows-3 items-center">
                      <div className="flex px-9 items-center max-md:flex-col max-md:px-0 max-md:text-center">
                        <div className="image w-1/3 mt-[-10px] self-start max-md:self-center max-md:w-[20%]">
                          <img
                            className="max-md:w-full h-full"
                            src={logo}
                            alt="logo-edtplus"
                          />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold mb-1 text-slate-700 max-md:mb-2.5">
                            Clases Prácticas
                          </h4>
                          <p className="text-slate-500">
                            Nada de clases solo en videos interminables. Tendrá
                            clases en pequeños video animados, sesiones en vivo
                            con un profesor para él o ella y recursos para tener
                            prácticas continuas.
                          </p>
                        </div>
                      </div>
                      <div className="flex px-9 items-center max-md:flex-col max-md:px-0 max-md:text-center">
                        <div className="image w-1/5 mt-[-10px] self-start max-md:self-center max-md:w-[20%]">
                          <img
                            className="max-md:w-full h-full"
                            src={logo}
                            alt="logo-edtplus"
                          />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold mb-1 text-slate-700 max-md:mb-2.5">
                            Contenido Original
                          </h4>
                          <p className="text-slate-500">
                            Nos encargamos de crear contenido basado en datos,
                            es decir contenido que funciona de manera constante.
                          </p>
                        </div>
                      </div>
                      <div className="flex px-9 items-center max-md:flex-col max-md:px-0 max-md:text-center">
                        <div className="image w-1/5 mt-[-10px] self-start max-md:self-center max-md:w-[20%]">
                          <img
                            className="max-md:w-full h-full"
                            src={logo}
                            alt="logo-edtplus"
                          />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold mb-1 text-slate-700 max-md:mb-2.5">
                            Sentirás que es un juego
                          </h4>
                          <p className="text-slate-500">
                            Aquí está la clave del aprendizaje efectivo. Debe
                            pasarla bien, mientras aprende con otros compañeros.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export { Methodology };
