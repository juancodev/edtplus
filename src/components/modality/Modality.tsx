import React from "react";
import { ButtonPrimary } from "../button/ButtonPrimary";
import marketing from "../../assets/marketing_digital.jpg";
import programming from "../../assets/programacion.jpg";
import design from "../../assets/diseño_grafico.jpg";
import photograph from "../../assets/fotografia_edicion_video2.jpg";

const Modality = () => {
  return (
    <>
      <section>
        <div className="max-w-full mx-auto relative">
          <div className="rounded-tr-[100px] bg-gradient-to-b from-blue-700 via-blue-600 to-blue-500">
            <div className="mx-14 px-6">
              <div className="pt-20 pb-20">
                <div className="mx-auto relative text-left text-white">
                  <div className="mb-20 max-w-2xl">
                    <h2 className="text-5xl font-bold mb-4">
                      ¿Cómo es estudiar en EDTecnica?
                    </h2>
                    <p className="text-xl font-light mb-8">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Magni, ipsam animi harum incidunt quod nisi.
                    </p>
                  </div>
                  <div className="grid grid-cols-4 gap-6">
                    <div className="container-online h-full flex flex-col px-6 py-5 bg-slate-50/20 rounded-br-[85px]">
                      <div className="photo mb-4">
                        <img
                          className="w-full rounded-lg h-[140px]"
                          src={marketing}
                          alt=""
                        />
                      </div>
                      <div className="title mb-5 flex flex-col">
                        <h3 className="h3 font-bold text-center text-2xl mb-4">
                          Online
                        </h3>
                        <ButtonPrimary
                          title="¡Conocer más!"
                          link="#"
                          backgroundColor="bg-blue-700"
                          style={"text-white py-2 px-4 rounded-full"}
                        />
                      </div>
                      <div className="list">
                        <ul className="text-left font-semibold text-lg">
                          <li className="flex items-start">
                            <svg
                              className="fill-current shrink-0 w-3 h-3 mt-1.5 mr-3"
                              viewBox="0 0 12 12"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                            </svg>
                            <span>
                              Acceso de por vida a todo el campus virtual.
                            </span>
                          </li>
                          <li className="flex items-start mt-2">
                            <svg
                              className="fill-current shrink-0 w-3 h-3 mt-1.5 mr-3"
                              viewBox="0 0 12 12"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                            </svg>
                            <span>
                              Aprendes habilidades para trabajar en cualquier
                              parte del mundo.
                            </span>
                          </li>
                          <li className="flex items-start mt-2">
                            <svg
                              className="fill-current shrink-0 w-3 h-3 mt-1.5 mr-3"
                              viewBox="0 0 12 12"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                            </svg>
                            Siempre recibimos propuesta empleo para ti de
                            nuestras empresas aliadas.
                          </li>
                          <li className="flex items-start mt-2">
                            <svg
                              className="fill-current shrink-0 w-3 h-3 mt-1.5 mr-3"
                              viewBox="0 0 12 12"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                            </svg>
                            Profesores y técnicos con amplia experiencia.
                          </li>
                          <li className="flex items-start mt-2">
                            <svg
                              className="fill-current shrink-0 w-3 h-3 mt-1.5 mr-3"
                              viewBox="0 0 12 12"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                            </svg>
                            Apoyamos las ideas más innovadoras de nuestros
                            estudiantes.
                          </li>
                          <li className="flex items-start mt-2">
                            <svg
                              className="fill-current shrink-0 w-3 h-3 mt-1.5 mr-3"
                              viewBox="0 0 12 12"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                            </svg>
                            Carreras y cursos profesionales cortos orientados
                            acelerar tu carrera profesional.
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="container-b-learning h-full flex flex-col px-6 py-5 bg-slate-50/20 rounded-br-[85px]">
                      <div className="photo mb-4">
                        <img
                          className="w-full rounded-lg h-[140px]"
                          src={programming}
                          alt=""
                        />
                      </div>
                      <div className="title mb-5 flex flex-col">
                        <h3 className="h3 font-bold text-center text-2xl mb-4">
                          B-learning
                        </h3>
                        <ButtonPrimary
                          title="¡Conocer más!"
                          link="#"
                          backgroundColor="bg-blue-700"
                          style={"text-white py-2 px-4 rounded-full"}
                        />
                      </div>
                      <div className="list">
                        <ul className="text-left font-semibold text-lg">
                          <li className="flex items-start">
                            <svg
                              className="fill-current shrink-0 w-3 h-3 mt-1.5 mr-3"
                              viewBox="0 0 12 12"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                            </svg>
                            Tendrás acceso al campus y prácticas reales.
                          </li>
                          <li className="flex items-start mt-2">
                            <svg
                              className="fill-current shrink-0 w-3 h-3 mt-1.5 mr-3"
                              viewBox="0 0 12 12"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                            </svg>
                            Aprendes habilidades para trabajar en cualquier
                            parte del mundo.
                          </li>
                          <li className="flex items-start mt-2">
                            <svg
                              className="fill-current shrink-0 w-3 h-3 mt-1.5 mr-3"
                              viewBox="0 0 12 12"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                            </svg>
                            Siempre recibimos propuesta empleo para ti de
                            nuestras empresas aliadas.
                          </li>
                          <li className="flex items-start mt-2">
                            <svg
                              className="fill-current shrink-0 w-3 h-3 mt-1.5 mr-3"
                              viewBox="0 0 12 12"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                            </svg>
                            Profesores y técnicos con amplia experiencia.
                          </li>
                          <li className="flex items-start mt-2">
                            <svg
                              className="fill-current shrink-0 w-3 h-3 mt-1.5 mr-3"
                              viewBox="0 0 12 12"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                            </svg>
                            Apoyamos las ideas más innovadoras de nuestros
                            estudiantes.
                          </li>
                          <li className="flex items-start mt-2">
                            <svg
                              className="fill-current shrink-0 w-3 h-3 mt-1.5 mr-3"
                              viewBox="0 0 12 12"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                            </svg>
                            Carreras y cursos profesionales cortos orientados
                            acelerar tu carrera profesional.
                          </li>
                          <li className="flex items-start mt-2">
                            <svg
                              className="fill-current shrink-0 w-3 h-3 mt-1.5 mr-3"
                              viewBox="0 0 12 12"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                            </svg>
                            Ubicada en lugares céntricos y con estacionamiento
                            privado.
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="container-face-to-face h-full flex flex-col px-6 py-5 bg-slate-50/20 rounded-br-[85px]">
                      <div className="photo mb-4">
                        <img
                          className="w-full rounded-lg h-[140px]"
                          src={design}
                          alt=""
                        />
                      </div>
                      <div className="title mb-5 flex flex-col">
                        <h3 className="h3 font-bold text-center text-2xl mb-4">
                          Present
                        </h3>
                        <ButtonPrimary
                          title="¡Conocer más!"
                          link="#"
                          backgroundColor="bg-blue-700"
                          style={"text-white py-2 px-4 rounded-full"}
                        />
                      </div>
                      <div className="list">
                        <ul className="text-left text-lg">
                          <li className="flex items-start">
                            <svg
                              className="fill-current shrink-0 w-3 h-3 mt-1.5 mr-3"
                              viewBox="0 0 12 12"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                            </svg>
                            Acceso a todas las herramientas, uniforme e insumos.
                          </li>
                          <li className="flex items-start mt-2">
                            <svg
                              className="fill-current shrink-0 w-3 h-3 mt-1.5 mr-3"
                              viewBox="0 0 12 12"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                            </svg>
                            Aprendes habilidades para trabajar en cualquier
                            parte del mundo.
                          </li>
                          <li className="flex items-start mt-2">
                            <svg
                              className="fill-current shrink-0 w-3 h-3 mt-1.5 mr-3"
                              viewBox="0 0 12 12"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                            </svg>
                            Siempre recibimos propuesta empleo para ti de
                            nuestras empresas aliadas.
                          </li>
                          <li className="flex items-start mt-2">
                            <svg
                              className="fill-current shrink-0 w-3 h-3 mt-1.5 mr-3"
                              viewBox="0 0 12 12"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                            </svg>
                            Profesores y técnicos con amplia experiencia.
                          </li>
                          <li className="flex items-start mt-2">
                            <svg
                              className="fill-current shrink-0 w-3 h-3 mt-1.5 mr-3"
                              viewBox="0 0 12 12"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                            </svg>
                            Apoyamos las ideas más innovadoras de nuestros
                            estudiantes.
                          </li>
                          <li className="flex items-start mt-2">
                            <svg
                              className="fill-current shrink-0 w-3 h-3 mt-1.5 mr-3"
                              viewBox="0 0 12 12"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                            </svg>
                            Carreras y cursos profesionales cortos orientados
                            acelerar tu carrera profesional.
                          </li>
                          <li className="flex items-start mt-2">
                            <svg
                              className="fill-current shrink-0 w-3 h-3 mt-1.5 mr-3"
                              viewBox="0 0 12 12"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                            </svg>
                            Ubicada en lugares céntricos y con estacionamiento
                            privado.
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="container-plus h-full flex flex-col px-6 py-5 bg-slate-50/20 rounded-br-[85px]">
                      <div className="photo mb-4">
                        <img
                          className="w-full rounded-lg h-[140px]"
                          src={photograph}
                          alt=""
                        />
                      </div>
                      <div className="title mb-5 flex flex-col">
                        <h3 className="h3 font-bold text-center text-2xl mb-4">
                          Plus
                        </h3>
                        <ButtonPrimary
                          title="¡Conocer más!"
                          link="#"
                          backgroundColor="bg-blue-700"
                          style={"text-white py-2 px-4 rounded-full"}
                        />
                      </div>
                      <div className="list">
                        <ul className="text-left text-lg">
                          <li className="flex items-start">
                            <svg
                              className="fill-current shrink-0 w-3 h-3 mt-1.5 mr-3"
                              viewBox="0 0 12 12"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                            </svg>
                            Un programa educativo en especialidades Tech, que
                            incluye programación, robótica e inglés.
                          </li>
                          <li className="flex items-start mt-2">
                            <svg
                              className="fill-current shrink-0 w-3 h-3 mt-1.5 mr-3"
                              viewBox="0 0 12 12"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                            </svg>
                            Aprendes habilidades para trabajar en cualquier
                            parte del mundo.
                          </li>
                          <li className="flex items-start mt-2">
                            <svg
                              className="fill-current shrink-0 w-3 h-3 mt-1.5 mr-3"
                              viewBox="0 0 12 12"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                            </svg>
                            Siempre recibimos propuesta empleo para ti de
                            nuestras empresas aliadas.
                          </li>
                          <li className="flex items-start mt-2">
                            <svg
                              className="fill-current shrink-0 w-3 h-3 mt-1.5 mr-3"
                              viewBox="0 0 12 12"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                            </svg>
                            Profesores y técnicos con amplia experiencia.
                          </li>
                          <li className="flex items-start mt-2">
                            <svg
                              className="fill-current shrink-0 w-3 h-3 mt-1.5 mr-3"
                              viewBox="0 0 12 12"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                            </svg>
                            Apoyamos las ideas más innovadoras de nuestros
                            estudiantes.
                          </li>
                          <li className="flex items-start mt-2">
                            <svg
                              className="fill-current shrink-0 w-3 h-3 mt-1.5 mr-3"
                              viewBox="0 0 12 12"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                            </svg>
                            Carreras y cursos profesionales cortos orientados
                            acelerar tu carrera profesional.
                          </li>
                        </ul>
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

export { Modality };
