import frontendImg from "../../assets/images/front-end.png";

function Skills() {
  return (
    <section id="skills">
      <div className="container pt-[50px]">
        <div className="text-center">
          <h2 className="text-headingColor font-[800] text-[2.4rem] mb-5">
            My Skills !
          </h2>
        </div>

        <div className="flex flex-col justify-center sm:py-12">
          <div className="w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0">
            <div className="relative text-gray-700 antialiased text-sm font-semibold">
              {/* ********** vertical line through the middle *********** */}
              <div className="hidden absolute w-1 sm:block bg-primaryColor h-full left-[50%] transform -translate-x-[50%]"></div>

              {/* ********** two side card *********** */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        className="flex items-center justify-center cursor-pointer bg-white p-4 rounded shadow group hover:bg-primaryColor duration-300"
                      >
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-3xl">
                          Html
                        </h3>
                      </div>
                    </div>
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div
                        data-aos="fade-left"
                        data-aos-duration="1200"
                        className="flex items-center justify-center bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150 "
                      >
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-3xl">
                          Css
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-[50%] transform -translate-x-[50%] -translate-y-4 sm:translate-y-0 flex items-center justify-self-center">
                    <figure>
                      <img src={frontendImg} alt="frontendImg" />
                    </figure>
                  </div>
                </div>
              </div>
              {/* ********** two side card *********** */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        className="flex items-center justify-center bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150 "
                      >
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-3xl">
                          Javascript
                        </h3>
                      </div>
                    </div>
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div
                        data-aos="fade-left"
                        data-aos-duration="1200"
                        className="flex items-center justify-center bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150 "
                      >
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-3xl">
                          React Js
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-[50%] transform -translate-x-[50%] -translate-y-4 sm:translate-y-0 flex items-center justify-self-center">
                    <figure>
                      <img src={frontendImg} alt="frontendImg" />
                    </figure>
                  </div>
                </div>
              </div>
              {/* ********** two side card *********** */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        className="flex items-center justify-center bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150 "
                      >
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-3xl">
                          Sass
                        </h3>
                      </div>
                    </div>
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div
                        data-aos="fade-left"
                        data-aos-duration="1200"
                        className="flex items-center justify-center bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150 "
                      >
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-3xl">
                          Tailwind
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-[50%] transform -translate-x-[50%] -translate-y-4 sm:translate-y-0 flex items-center justify-self-center">
                    <figure>
                      <img src={frontendImg} alt="frontendImg" />
                    </figure>
                  </div>
                </div>
              </div>
              {/* ********** two side card *********** */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        className="flex items-center justify-center bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150 "
                      >
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-3xl">
                          Typescript
                        </h3>
                      </div>
                    </div>
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div
                        data-aos="fade-left"
                        data-aos-duration="1200"
                        className="flex items-center justify-center bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150 "
                      >
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-3xl">
                          Next Js
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-[50%] transform -translate-x-[50%] -translate-y-4 sm:translate-y-0 flex items-center justify-self-center">
                    <figure>
                      <img src={frontendImg} alt="frontendImg" />
                    </figure>
                  </div>
                </div>
              </div>
              {/* ********** two side card *********** */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        className="flex items-center justify-center bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150 "
                      >
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-3xl">
                          Responsive Design
                        </h3>
                      </div>
                    </div>
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div
                        data-aos="fade-left"
                        data-aos-duration="1200"
                        className="flex items-center justify-center bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150 "
                      >
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-3xl">
                          Bootstrap
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-[50%] transform -translate-x-[50%] -translate-y-4 sm:translate-y-0 flex items-center justify-self-center">
                    <figure>
                      <img src={frontendImg} alt="frontendImg" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
