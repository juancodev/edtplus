import logo from "@assets/EDTPLUS.png";

const Header = () => {
  return (
    <>
      <header className="header-container full-screen:w-full max-w-6xl mx-14 my-6 absolute z-30 max-lg:w-[90%]">
        <div className="flex items-center justify-between px-6 max-md:justify-center">
          <div className="logo">
            <a href="#">
              <img src={logo} alt="" width={140} height={50} />
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export { Header };
