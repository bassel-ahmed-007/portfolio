import heroImg from "../../assets/images/bassel.jpg";

function Hero() {
  return (
    <section className="pt-0" id="about">
      <div className="container pt-[85px]">
        <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
          {/* ********** hero left content ********** */}
          <div className="w-full md:basis-1/2">
            <h5
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-headingColor font-[600] text-[20px]"
            >
              Hello And Welcome
            </h5>
            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-[30px]"
            >
              I'm{" "}
              <span className="text-primaryColor shadow-sm">Bassel Ahemd</span>{" "}
              <br />
              <span className="text-primaryColor shadow-sm">
                Front-End
              </span>{" "}
              Developer
            </h1>

            <div
              data-aos="fade-up"
              data-aos-duration="1800"
              data-aos-delay="200"
              className="flex items-center gap-6 mt-[35px]"
            >
              <a href="#contact">
                <a
                  href="mailto:basselahmed007@gmail.com"
                  className="bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]"
                >
                  <i class="ri-mail-fill"></i> Mail me
                </a>
              </a>
            </div>

            <p
              data-aos="fade-left"
              data-aos-duration="1500"
              data-aos-delay="600"
              className="flex gap-2 text-headingColor mt-14 font-[500] text-[20px] leading-7 sm:pl-14 sm:pr-10"
            >
              <span>
                <i class="ri-apps-fill"></i>
              </span>
              I am a front-end developer with enough experience specializing in
              web development, HTML, CSS, Javascript, and React JS. Adept at
              identifying opportunities to enhance front-end design and improve
              the UX.
            </p>

            <div className="md:flex items-center gap-9 mt-[100px]">
              <p className="text-smallTextColor text-[30px] font-[600]">
                Find Me Here:
              </p>
              <div className=" flex gap-8">
                <p>
                  <a
                    href="https://www.linkedin.com/in/bassel-ahmed-942105264/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-smallTextColor text-[55px] font-[600] "
                  >
                    <i class="ri-linkedin-box-fill hover:text-primaryColor"></i>
                  </a>
                </p>
                <p>
                  <a
                    href="https://github.com/bassel-ahmed-007"
                    target="_blank"
                    rel="noreferrer"
                    className="text-smallTextColor text-[55px] font-[600]"
                  >
                    <i class="ri-github-fill hover:text-primaryColor"></i>
                  </a>
                </p>
                <p>
                  <a
                    href="https://www.facebook.com/profile.php?id=100078677074006"
                    target="_blank"
                    rel="noreferrer"
                    className="text-smallTextColor text-[55px] font-[600]"
                  >
                    <i class="ri-facebook-box-fill hover:text-primaryColor"></i>
                  </a>
                </p>
                <p>
                  <a
                    href="#whatsapp"
                    className="text-smallTextColor text-[55px] font-[600]"
                  >
                    <i class="ri-whatsapp-fill hover:text-primaryColor"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* *********** hero img ******* */}
          <div
            data-aos="fade-left"
            data-aos-duration="1500"
            data-aos-delay="1200"
            className="basis-1/3 mt-10 sm:mt-0"
          >
            <figure className="flex items-center justify-center">
              <img src={heroImg} alt="img-hero" className="rounded-[200px]" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
