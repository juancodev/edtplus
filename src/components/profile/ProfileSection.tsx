import student from "../../assets/student.jpg";
import "./ProfileStyle.css";

const ProfileSection = () => {
  return (
    <>
      <section className="mt-20">
        <div className="max-w-full mx-auto">
          <div className="rounded-tl-[100px] bg-gradient-to-t from-blue-700 via-[#0072ce] to-blue-400">
            <div className="mx-14 px-6">
              <div className="pt-20 pb-20">
                <div className="mx-auto relative text-left text-slate-800">
                  <div className="mb-20 max-w-2xl">
                    <h2 className="text-5xl text-white font-bold mb-4">
                      Las etapas del programa ¿En cuál se encuentra tu hij@?
                    </h2>
                  </div>
                  <div className="grid-profile flex flex-col gap-x-6 gap-y-8 mx-10">
                    <div className="flex">
                      <article className="grid grid-cols-2 h-full bg-slate-800 rounded-xl">
                        <div>
                          <img
                            className="h-full w-full object-cover rounded-l-lg"
                            src={student}
                            alt=""
                          />
                        </div>
                        <div className="content p-8 flex flex-col gap-14">
                          <div>
                            <h3 className="mb-4 text-white text-3xl text-center font-bold">
                              Educación Inicial
                            </h3>
                            <p className="text-white text-md text-center font-normal text-slate-700">
                              Abarca de los 4 hasta los 6 años.
                            </p>
                          </div>
                          <p className="text-white text-lg text-center font-normal text-slate-700">
                            Solo en modalidad presencial en Colegios Aliados.
                          </p>
                        </div>
                      </article>
                    </div>
                    <div className="flex">
                      <article className="grid grid-cols-2 h-full bg-slate-800 rounded-xl">
                        <div className="content content p-8 flex flex-col gap-14">
                          <div>
                            <h3 className="mb-4 text-white text-3xl text-center font-bold">
                              Básica Baja
                            </h3>
                            <p className="text-white text-md text-center font-normal text-slate-700">
                              Abarca de los 6 hasta los 9 años.
                            </p>
                          </div>
                          <p className="text-white text-lg text-center font-normal text-slate-700">
                            Solo en modalidad presencial en Colegios Aliados.
                          </p>
                        </div>
                        <div className="h-[inherit] w-[inherit]">
                          <img
                            className="h-full w-full object-center object-fill rounded-l-lg"
                            src={student}
                            alt=""
                          />
                        </div>
                      </article>
                    </div>
                    <div className="flex">
                      <article className="grid grid-cols-2 h-full bg-slate-800 rounded-xl">
                        <div className="h-[inherit]">
                          <img
                            className="h-full w-full object-center object-fill rounded-l-lg"
                            src={student}
                            alt=""
                          />
                        </div>
                        <div className="content p-8 flex flex-col gap-14">
                          <div>
                            <h3 className="mb-4 text-white text-3xl text-center font-bold">
                              Básica Alta
                            </h3>
                            <p className="text-white text-md text-center font-normal text-slate-700">
                              Abarca de los 9 hasta los 12 años.
                            </p>
                          </div>
                          <p className="text-white text-lg text-center font-normal text-slate-700">
                            Disponible en todas las modalidades.
                          </p>
                        </div>
                      </article>
                    </div>
                    <div className="flex">
                      <article className="grid grid-cols-2 h-full bg-slate-800 rounded-xl">
                        <div className="content p-8 flex flex-col gap-14">
                          <div>
                            <h3 className="mb-4 text-white text-3xl text-center font-bold">
                              Programador Jr
                            </h3>
                            <p className="text-white text-md text-center font-normal text-slate-700">
                              Abarca de los 12 hasta los 15 años.
                            </p>
                          </div>
                          <p className="text-white text-lg text-center font-normal text-slate-700">
                            Disponibles en todas las modalidades.
                          </p>
                        </div>
                        <div className="h-[inherit]">
                          <img
                            className="h-full w-full object-fill rounded-l-lg"
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
