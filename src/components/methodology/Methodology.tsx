import logo from "@assets/ICONO-EDTplus.png";
import edtplusSteam from "@assets/steam-edtecnica.mp4";

const Methodology = () => {
  return (
    <>
      <section>
        <div className="methodology-container">
          <div className="items-container mx-14 py-4">
            <div className="pt-20 pb-20">
              <div className="mb-20 max-w-1xl">
                <div className="items-grid grid grid-cols-2 gap-0 divide-x divide-slate-300">
                  <div className="item px-9 h-[500px] w-full">
                    <video
                      className="w-full h-full"
                      src={edtplusSteam}
                      autoPlay
                      loop
                      controls
                    ></video>
                  </div>
                  <div className="w-full">
                    <h2 className="text-3xl font-bold mb-4 text-slate-700 text-center">
                      A tus hijos les encantará
                    </h2>
                    <div className="grid grid-rows-3">
                      <div className="item px-9">
                        <div className="image mb-3">
                          <img src={logo} alt="" width={50} height={50} />
                        </div>
                        <h4 className="text-xl font-bold mb-1 text-slate-800">
                          Clases Prácticas
                        </h4>
                        <p className="text-slate-500">
                          Nada de clases solo en videos interminables. Tendrá
                          clases en pequeños video animados, sesiones en vivo
                          con un profesor para él o ella y recursos para tener
                          prácticas continuas.
                        </p>
                      </div>
                      <div className="item px-9">
                        <div className="image mb-3">
                          <img src={logo} alt="" width={50} height={50} />
                        </div>
                        <h4 className="text-xl font-bold mb-1 text-slate-800">
                          Contenido Original
                        </h4>
                        <p className="text-slate-500">
                          Nos encargamos de crear contenido basado en datos, es
                          decir contenido que funciona de manera constante.
                        </p>
                      </div>
                      <div className="item px-9">
                        <div className="image mb-3">
                          <img src={logo} alt="" width={50} height={50} />
                        </div>
                        <h4 className="text-xl font-bold mb-1 text-slate-800">
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
      </section>
    </>
  );
};

export { Methodology };
