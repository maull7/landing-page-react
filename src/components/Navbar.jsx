import { useEffect, useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null); // Menyimpan index menu aktif

  const handleClick = () => {
    setShow((prevShow) => !prevShow);
  };

  const handleActive = (index) => {
    setActiveIndex(index); // Set active menu berdasarkan index
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setScroll(true);
        setShow(false); // Hide the menu when scrolling
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Determine if menu is active
  const menuActive = show ? "left-0" : "left-full";

  // Scroll active class for navbar
  const scrollActive = scroll ? "py-6 bg-slate-100 shadow" : "py-4";

  const hrefActive = (index) =>
    activeIndex === index ? "text-white p-2 rounded-lg bg-cyan-500" : "font-medium opacity-75";

  return (
    <div className={`navbar fixed w-full transition-all ${scrollActive}`}>
      <div className="container mx-auto px-4">
        <div className="navbar-box flex items-center justify-between">
          <div className="logo">
            <h1 className="text-2xl font-bold">Warung</h1>
          </div>

          {/* Navigation Menu */}
          <ul
            className={`flex lg:gap-12 md:static md:flex-row md:shadow-none md:bg-transparent md:w-auto md:h-full md:translate-y-0  md:text-black md:p-0 md:m-0 md:transition-none gap-8 fixed ${menuActive} top-1/4 translate-y-1/2 flex-col px-8 py-6 rounded shadow-lg bg-cyan-400 font-bold text-white transition-all`}
          >
            <li className="flex items-center gap-3">
              <i className="ri-home-fill text-3xl md:hidden block"></i>
              <a
                href="#home"
                onClick={() => handleActive(0)} // Update active on click
                className={hrefActive(0)}
              >
                Beranda
              </a>
            </li>
            <li className="flex items-center gap-3">
              <i className="ri-group-fill text-3xl md:hidden block"></i>
              <a
                href="#about"
                onClick={() => handleActive(1)} // Update active on click
                className={hrefActive(1)}
              >
                Tentang Kami
              </a>
            </li>
            <li className="flex items-center gap-3">
              <i className="ri-shopping-cart-fill text-3xl md:hidden block"></i>
              <a
                href="#service"
                onClick={() => handleActive(2)} // Update active on click
                className={hrefActive(2)}
              >
                Layanan
              </a>
            </li>
            <li className="flex items-center gap-3">
              <i className="ri-projector-fill text-3xl md:hidden block"></i>
              <a
                href="#proyek"
                onClick={() => handleActive(3)} // Update active on click
                className={hrefActive(3)}
              >
                Proyek
              </a>
            </li>
          </ul>

          {/* Social Media and Menu Toggle */}
          <div className="social flex items-center gap-2">
            <a
              href="#"
              className="bg-cyan-400 px-5 py-2 rounded-full text-white font-bold hover:bg-cyan-950 transition-all"
            >
              Social Media
            </a>
            <i
              onClick={handleClick}
              className="ri-menu-line text-3xl md:hidden block"
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
