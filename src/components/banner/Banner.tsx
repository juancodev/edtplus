import { useEffect } from "react";
import AOS from "aos";
import { BtnHero } from "../button/ButtonPrimary";
import "./Banner.css";
import "aos/dist/aos.css";

const Banner = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <section>
        <div className="methodology-container">
          <div className="items-container mx-14 py-4 max-md:mx-7">
            <div className="py-5 max-md:py-0">
              <div className="mb-1 max-w-1xl" data-aos="fade-up">
                <div className="items-grid grid grid-cols-2 gap-0 max-md:grid-cols-1 max-md:auto-rows-auto">
                  <div className="floating">
                    <img
                      className="h-full"
                      src="https://res.cloudinary.com/juancodev/image/upload/v1691973575/banner-robot_bsyt3p.png"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <h2 className="text-3xl font-bold text-center mb-9 text-slate-800 max-md:text-2xl">
                      ¡Pon a volar la imaginación de tus hijos!
                    </h2>
                    <BtnHero title="Regístrate Gratis" />
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

export { Banner };
