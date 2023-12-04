import { useEffect, useRef } from "react";

function Header() {
  const headerRef = useRef(null);

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 60 ||
        document.documentElement.scrollTop > 60
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();

    return window.removeEventListener("scroll", stickyHeaderFunc);
  }, []);

  return (
    <header
      ref={headerRef}
      className="w-full h-[80px] flex items-center transition-all duration-300"
    >
      <div className="container">
        <div className="flex items-center justify-between">
          {/* ********* logo ***************** */}
          <div
            data-aos="fade-down"
            data-aos-duration="1500"
            className="hidden md:flex items-center gap-[10px]"
          >
            <p className="text-[25px] text-smallTextColor font-[700] ml-5">
              Bassel Ahmed
            </p>
          </div>

          {/* ************ menu ******* */}
          <div className="">
            <ul className="flex items-center gap-10 text-[20px]">
              <li>
                <a
                  className="text-smallTextColor font-[600] hover:text-primaryColor"
                  href="#about"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="text-smallTextColor font-[600] hover:text-primaryColor"
                  href="#skills"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  className="text-smallTextColor font-[600] hover:text-primaryColor"
                  href="#Projects"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* ************ menu right *********** */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/bassel-ahmed-942105264/"
              target="_blank"
              className="hidden md:flex items-center gap-2 text-white cursor-pointer font-[600] border border-solid bg-primaryColor  py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white hover:font-[600] ease-in duration-300"
              rel="noreferrer"
            >
              <i class="ri-linkedin-box-fill"></i> linken-In
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
