import { BtnHero } from "../button/ButtonPrimary";
import "./Banner.css";

const Banner = () => {
  return (
    <>
      <section>
        <div className="methodology-container">
          <div className="items-container mx-14 py-4">
            <div className="pt-5 pb-5">
              <div className="mb-1 max-w-1xl">
                <div className="items-grid grid grid-cols-2 gap-0">
                  <div className="floating">
                    <img
                      className="h-full"
                      src="https://res.cloudinary.com/juancodev/image/upload/v1691973575/banner-robot_bsyt3p.png"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <h2 className="text-3xl font-semibold text-center mb-9 text-slate-800">
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
