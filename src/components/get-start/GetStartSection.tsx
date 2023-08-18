import { useEffect } from "react";
import AOS from "aos";
import { BtnHero } from "../button/ButtonPrimary";
import "aos/dist/aos.css";

const GetStartSection = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <section className="relative">
        <div className="bg-slate-800 inset-0">
          <div className="mx-14 max-w-full px-6 max-md:mx-7 max-md:px-3">
            <div className="py-20 max-md:py-10">
              <div
                className="flex justify-between items-center max-md:flex-col max-md:gap-4"
                data-aos="fade-up"
              >
                <div className="text-left mr-16 mb-0 max-md:text-center max-md:mr-0">
                  <p className="font-medium text-xl mb-3 text-[#0072ce]">
                    ¿Qué estas esperando?
                  </p>
                  <h2 className="text-4xl font-bold text-white max-md:text-xl max-md:text-center">
                    No le dés más larga a tu educación.
                  </h2>
                </div>
                <div className="button shrink-0">
                  <div className="button-container flex justify-start mx-auto">
                    <div>
                      <BtnHero title="Regístrate Gratis" />
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
