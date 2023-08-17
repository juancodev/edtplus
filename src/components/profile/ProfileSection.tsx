import { useEffect } from "react";
import AOS from "aos";
import student from "@assets/student.jpg";
import "aos/dist/aos.css";
import "./ProfileStyle.css";

const ProfileSection = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <section className="mt-20">
        <div className="max-w-full mx-auto">
          <div className="rounded-tl-[100px] bg-gradient-to-t from-blue-700 via-[#0072ce] to-blue-400">
            <div className="mx-14 px-6 max-md:mx-7 max-md:px-3">
              <div className="py-20 max-md:py-10">
                <div className="mx-auto relative text-left">
                  <div className="mb-20 max-w-2xl max-md:mb-10 max-md:max-w-lg">
                    <h2 className="text-5xl text-white font-bold mb-4 max-md:text-2xl max-md:text-center">
                      Las etapas del programa ¿En cuál se encuentra tu hij@?
                    </h2>
                  </div>
                  <div className="grid-profile flex flex-col gap-x-6 gap-y-8 mx-10 max-md:mx-2">
                    <div className="flex" data-aos="fade-right">
                      <article className="grid grid-cols-2 h-full bg-slate-800 rounded-xl max-md:grid-cols-1">
                        <div className="max-md:h-full max-md:w-full">
                          <img
                            className="h-full w-full object-cover rounded-l-lg max-md:rounded-t-lg max-md:rounded-bl-none"
                            src={student}
                            alt=""
                          />
                        </div>
                        <div className="content p-8 flex flex-col gap-14 max-md:p-5 max-md:gap-10">
                          <div>
                            <h3 className="mb-4 text-white text-3xl text-center font-bold max-md:text-2xl">
                              Educación Inicial
                            </h3>
                            <p className="text-white text-md text-center font-normal text-slate-700 max-md:font-light">
                              Abarca de los 4 hasta los 6 años.
                            </p>
                          </div>
                          <p className="text-white text-lg text-center font-normal text-slate-700 max-md:text-md">
                            Solo en modalidad presencial en Colegios Aliados.
                          </p>
                        </div>
                      </article>
                    </div>
                    <div className="flex" data-aos="fade-left">
                      <article className="grid grid-cols-2 h-full bg-slate-800 rounded-xl max-md:grid-cols-1">
                        <div className="content content p-8 flex flex-col gap-14">
                          <div>
                            <h3 className="mb-4 text-white text-3xl text-center font-bold max-md:text-2xl">
                              Básica Baja
                            </h3>
                            <p className="text-white text-md text-center font-normal text-slate-700 max-md:font-light">
                              Abarca de los 6 hasta los 9 años.
                            </p>
                          </div>
                          <p className="text-white text-lg text-center font-normal text-slate-700 max-md:text-md">
                            Solo en modalidad presencial en Colegios Aliados.
                          </p>
                        </div>
                        <div className="h-[inherit] w-[inherit] max-md:order-first">
                          <img
                            className="h-full w-full object-cover rounded-l-lg max-md:rounded-t-lg max-md:rounded-bl-none"
                            src={student}
                            alt=""
                          />
                        </div>
                      </article>
                    </div>
                    <div className="flex" data-aos="fade-right">
                      <article className="grid grid-cols-2 h-full bg-slate-800 rounded-xl max-md:grid-cols-1">
                        <div className="h-[inherit] w-[inherit] max-md:h-full max-md:w-full">
                          <img
                            className="h-full w-full object-cover rounded-l-lg max-md:rounded-t-lg max-md:rounded-bl-none"
                            src={student}
                            alt=""
                          />
                        </div>
                        <div className="content p-8 flex flex-col gap-14">
                          <div>
                            <h3 className="mb-4 text-white text-3xl text-center font-bold max-md:text-2xl">
                              Básica Alta
                            </h3>
                            <p className="text-white text-md text-center font-normal text-slate-700 max-md:font-light">
                              Abarca de los 9 hasta los 12 años.
                            </p>
                          </div>
                          <p className="text-white text-lg text-center font-normal text-slate-700 max-md:text-md">
                            Disponible en todas las modalidades.
                          </p>
                        </div>
                      </article>
                    </div>
                    <div className="flex" data-aos="fade-left">
                      <article className="grid grid-cols-2 h-full bg-slate-800 rounded-xl max-md:grid-cols-1">
                        <div className="content p-8 flex flex-col gap-14">
                          <div>
                            <h3 className="mb-4 text-white text-3xl text-center font-bold max-md:text-2xl">
                              Programador Jr
                            </h3>
                            <p className="text-white text-md text-center font-normal text-slate-700 max-md:font-light">
                              Abarca de los 12 hasta los 15 años.
                            </p>
                          </div>
                          <p className="text-white text-lg text-center font-normal text-slate-700 max-md:text-md">
                            Disponibles en todas las modalidades.
                          </p>
                        </div>
                        <div className="h-[inherit] max-md:h-full max-md:w-full max-md:order-first">
                          <img
                            className="h-[inherit] w-[inherit] object-cover rounded-l-lg max-md:rounded-t-lg max-md:rounded-bl-none"
                            src={student}
                            alt=""
                          />
                        </div>
                      </article>
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

export { ProfileSection };
