import React from "react";
import { ButtonPrimary } from "../button/ButtonPrimary";

const GetStartSection = () => {
  return (
    <>
      <section className="relative">
        <div className="bg-slate-800 inset-0">
          <div className="mx-14 max-w-full px-6">
            <div className="py-20">
              <div className="flex justify-between items-center">
                <div className="text-left mr-16 mb-0">
                  <p className="font-medium text-xl mb-3 text-blue-500">
                    ¿Qué estas esperando?
                  </p>
                  <h2 className="text-4xl font-bold text-white">
                    No le dés más larga a tu educación.
                  </h2>
                </div>
                <div className="button shrink-0">
                  <div className="button-container flex justify-start mx-auto">
                    <div>
                      <ButtonPrimary
                        title="¡Comienza ahora!"
                        link="#"
                        backgroundColor="bg-blue-400"
                        style={"text-white py-2 px-4 rounded-full mr-4"}
                      />
                    </div>
                    <div>
                      <ButtonPrimary
                        title={`Soy Estudiante`}
                        link="https://edtecnica.info/"
                        backgroundColor="bg-slate-700"
                        style={"text-white py-2 px-4 rounded-full mr-4"}
                      />
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

export { GetStartSection };
