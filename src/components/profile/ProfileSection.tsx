import student from "../../assets/student.jpg";
import company from "../../assets/company.jpg";
import freelance from "../../assets/freelance.jpg";
import professional from "../../assets/professional.jpg";
import "./ProfileStyle.css";

const ProfileSection = () => {
  return (
    <>
      <section className="mt-20">
        <div className="max-w-full mx-auto">
          {/* <div className="rounded-tl-[100px] bg-gradient-to-t from-blue-700 via-[#0072ce] to-blue-400"> */}
          <div className="rounded-tl-[100px] bg-neutral-100">
            <div className="mx-14 px-6">
              <div className="pt-20 pb-20">
                <div className="mx-auto relative text-left text-slate-800">
                  <div className="mb-20 max-w-3xl">
                    <h2 className="text-6xl text-[#ffcd00] font-bold mb-4">
                      ¿Para quién es EDTPlus?
                    </h2>
                    <p className="text-lg text-[#ffcd00] font-light mb-8">
                      Miles de estudiantes, profesionales y emprendedores se han
                      preparado con nuestros cursos y mejoraron sus ingresos,
                      consiguieron su primer trabajo o crearon su propio
                      negocio. ¡Sigues tú!
                    </p>
                  </div>
                  <div className="grid-profile grid grid-cols-2 gap-x-6 gap-y-8">
                    <div className="flex">
                      <article className="grid grid-cols-2 grid-rows-1 h-full bg-[#0072ce] rounded-xl">
                        <div>
                          <img
                            className="h-full w-full object-cover rounded-l-lg"
                            src={student}
                            alt=""
                          />
                        </div>
                        <div className="content p-6">
                          <h3 className="mb-4 text-white text-xl font-bold">
                            Estudiantes
                          </h3>
                          <p className="text-white text-sm font-normal text-slate-700">
                            Quienes al egresar de bachillerato quieren realizar
                            una carrera técnica corta que les permita insertarse
                            en el mercado laboral de la manera más rápida y
                            mejores pagadas.
                          </p>
                        </div>
                      </article>
                    </div>
                    <div className="flex">
                      <article className="grid grid-cols-2 grid-rows-1 h-full bg-[#0072ce] rounded-xl">
                        <div>
                          <img
                            className="h-full w-full object-cover rounded-l-lg"
                            src={company}
                            alt=""
                          />
                        </div>
                        <div className="content p-6">
                          <h3 className="mb-4 text-white text-xl font-bold">
                            Empresas
                          </h3>
                          <p className="text-white text-sm font-normal text-slate-700">
                            Grupos empresariales y comerciales que quieran
                            ampliar la formación técnica profesional del
                            personal.
                          </p>
                        </div>
                      </article>
                    </div>
                    <div className="flex">
                      <article className="grid grid-cols-2 grid-rows-1 h-full bg-[#0072ce] rounded-xl">
                        <div>
                          <img
                            className="h-full w-full object-cover rounded-l-lg"
                            src={professional}
                            alt=""
                          />
                        </div>
                        <div className="content p-6">
                          <h3 className="mb-4 text-white text-white text-xl font-bold">
                            Profesionales
                          </h3>
                          <p className="text-white text-white text-sm font-normal text-slate-700">
                            Quienes desean desarrollar una carrera técnica que
                            complete su formación universitaria y permita
                            ampliar las oportunidades labores y emprendimiento.
                          </p>
                        </div>
                      </article>
                    </div>
                    <div className="flex">
                      <article className="grid grid-cols-2 grid-rows-1 h-full bg-[#0072ce] rounded-xl">
                        <div>
                          <img
                            className="h-full w-full object-cover rounded-l-lg"
                            src={freelance}
                            alt=""
                          />
                        </div>
                        <div className="content p-6">
                          <h3 className="mb-4 text-white text-xl font-bold">
                            Freelancer
                          </h3>
                          <p className="text-white text-sm font-normal text-slate-700">
                            Adquiere los conocimientos para que tu negocio
                            despegue. ¡Dale el mejor servicio a tus clientes!
                          </p>
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
