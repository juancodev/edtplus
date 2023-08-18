import { BtnHero } from "../button/ButtonPrimary";
import ilustratorImg from "@assets/hero-illustration.svg";

const Hero = () => {
  return (
    <>
      <section>
        {/* <div className="hero-container rounded-bl-[100px] bg-[#2D59F8]"> */}
        <div className="hero-container rounded-bl-[100px] bg-gradient-to-t from-blue-700 via-[#0072ce] to-blue-400 max-lg:max-w-full">
          <div className="hero-sections mx-14 py-4 px-6 max-md:mx-4 max-md:px-2.5">
            <div className="pt-40 pb-20 max-md:pt-24 max-md:pb-10">
              <div className="hero-content flex max-md:justify-center">
                <div className="content text-white w-1/2 max-md:w-full max-md:text-center">
                  <h1 className="text-5xl font-bold mb-6 max-md:text-4xl max-sm:mb-3">
                    La Escuela PLUS
                  </h1>
                  <p className="paragraph text-xl font-semibold mb-6 max-md:text-lg max-md:mb-4">
                    Prepara a tus chamos para el futuro profesional
                  </p>
                  <p className="paragraph text-xl w-11/12 font-light mb-8 max-md:text-lg max-md:w-[99%] max-md:mb-5">
                    Permitiendo que descubran un universo de conocimiento y
                    habilidades en programación, robótica, IA y tecnologías
                    emergentes.
                  </p>
                  <div className="button flex justify-center">
                    <BtnHero title="Regístrate Gratis" />
                  </div>
                </div>
                <div className="image mx-auto absolute md:max-lg:left-[333px] md:max-lg:w-[500px] md:max-lg:h-[500px] right-0 full-screen:left-[750px] max-md:hidden">
                  <div className="relative mx-auto md:max-lg:bottom-[60px]">
                    <img
                      className="absolute bottom-[30%] z-10 mix-blend-lighten md:max-lg:bottom-0"
                      src={ilustratorImg}
                      alt=""
                      width={600}
                      height={400}
                    />
                    <img
                      className="relative bottom-[165px] z-20 md:max-lg:bottom-0"
                      src="https://res.cloudinary.com/juancodev/image/upload/v1690993030/hero_hvwdbu.png"
                      alt=""
                      width={600}
                      height={400}
                    />
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

export { Hero };
