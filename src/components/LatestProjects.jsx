import waveLine from "../assets/photos/wave-line.png";
import waveLine2 from "../assets/photos/waveLine2.png";
import p1 from "../assets/project/p1.png";
import p2 from "../assets/project/p2.png";
import p3 from "../assets/project/p3.png";
import p4 from "../assets/project/p4.png";
import p5 from "../assets/project/p5.png";
import p6 from "../assets/project/p6.png";
import lp1 from "../assets/lp/lp1.jpg";
import lp2 from "../assets/lp/lp2.jpg";
import lp3 from "../assets/lp/lp3.jpg";
import lp4 from "../assets/lp/lp4.jpg";
import lp5 from "../assets/lp/lp5.jpg";
import lp6 from "../assets/lp/lp6.jpg";
import lp7 from "../assets/lp/lp7.jpg";
import lp8 from "../assets/lp/lp8.jpg";
import lp9 from "../assets/lp/lp9.jpg";
import lp10 from "../assets/lp/lp10.jpg";
import lp11 from "../assets/lp/lp11.jpg";
import lp12 from "../assets/lp/lp12.jpg";
import lp13 from "../assets/lp/lp13.jpg";
import lp14 from "../assets/lp/lp14.jpg";
import lp15 from "../assets/lp/lp15.jpg";
import lp16 from "../assets/lp/lp16.jpg";

import Fade from "react-reveal/Fade";

const LatestProjects = () => {
  return (
    <>
      <section className="w-auto">
        <div className="hidden md:block mb-6">
          <img src={waveLine} alt="" />
        </div>

        <div className="w-auto max-w-[1360px] mx-auto">
          <div className="flex flex-col items-center mb-[25px]">
            <div className="flex justify-center gap-4 items-center">
              <div className="flex flex-col">
                <hr className="border-t-2 border-primary w-8 ml-auto" />
                <hr className="border-t-2 border-primary w-5 mt-3 ml-auto" />
              </div>

              <Fade bottom>
                <h1 className="font-roboto text-2xl md:text-[35px] font-[700] uppercase">
                  <span className="text-primary">LATEST</span> PROJECTS
                </h1>
              </Fade>

              <div className="flex flex-col ">
                <hr className="border-t-2 border-primary w-8" />
                <hr className="border-t-2 border-primary w-5 mt-3" />
              </div>
            </div>

            <p className="text-center font-openSans text-[#767676] normal-case w-[80%] mx-auto mt-6">
              In the realm of construction and electrical excellence, DG-Bangla
              proudly presents its latest projects, showcasing a commitment to
              innovation, precision, and superior quality. From state-of-the-art
              commercial developments to cutting-edge electrical installations,
              each project reflects DG-Bangla's dedication to delivering
              exceptional results
            </p>
          </div>

          <div>
            <div
              className="pb-1 flex space-x-none md:space-x-6 overflow-x-auto [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500 justify-center"
              aria-label="Tabs"
              role="tablist"
            >
              <button
                type="button"
                className="hs-tab-active:font-semibold hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent whitespace-nowrap text-gray-500 active font-openSans uppercase text-sm md:text-base font-semibold"
                id="horizontal-scroll-tab-item-1"
                data-hs-tab="#horizontal-scroll-tab-1"
                aria-controls="horizontal-scroll-tab-1"
                role="tab"
              >
                All <span className="hidden md:block">&nbsp;</span> /
              </button>
              <button
                type="button"
                className="hs-tab-active:font-semibold hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent whitespace-nowrap text-gray-500 hover:text-primary focus:outline-none focus:text-primary disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500 font-openSans uppercase text-sm md:text-base font-semibold"
                id="horizontal-scroll-tab-item-2"
                data-hs-tab="#horizontal-scroll-tab-2"
                aria-controls="horizontal-scroll-tab-2"
                role="tab"
              >
                House <span className="hidden md:block">&nbsp;</span> /
              </button>
              <button
                type="button"
                className="hs-tab-active:font-semibold hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent whitespace-nowrap text-gray-500 hover:text-primary focus:outline-none focus:text-primary disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500 font-openSans uppercase text-sm md:text-base font-semibold"
                id="horizontal-scroll-tab-item-3"
                data-hs-tab="#horizontal-scroll-tab-3"
                aria-controls="horizontal-scroll-tab-3"
                role="tab"
              >
                Building <span className="hidden md:block">&nbsp;</span> /
              </button>
              <button
                type="button"
                className="hs-tab-active:font-semibold hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent whitespace-nowrap text-gray-500 hover:text-primary focus:outline-none focus:text-primary disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500 font-openSans uppercase text-sm md:text-base font-semibold"
                id="horizontal-scroll-tab-item-4"
                data-hs-tab="#horizontal-scroll-tab-4"
                aria-controls="horizontal-scroll-tab-4"
                role="tab"
              >
                Office <span className="hidden md:block">&nbsp;</span> /
              </button>

              <button
                type="button"
                className="hs-tab-active:font-semibold hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent whitespace-nowrap text-gray-500 hover:text-primary focus:outline-none focus:text-primary disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500 font-openSans uppercase text-sm md:text-base font-semibold"
                id="horizontal-scroll-tab-item-5"
                data-hs-tab="#horizontal-scroll-tab-5"
                aria-controls="horizontal-scroll-tab-5"
                role="tab"
              >
                Interior
              </button>
            </div>

            <div className="mt-3">
              <div
                id="horizontal-scroll-tab-1"
                role="tabpanel"
                aria-labelledby="horizontal-scroll-tab-item-1"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-none p-2 md:p-0 gap-4">
                  <div className="relative">
                    <a className="absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-50 duration-300 text-primary font-inter">
                      <h1 className="tracking-wider font-semibold">
                        Ansar Barrack at BSC Yard
                      </h1>
                    </a>
                    <a href="#" className="relative">
                      <div className="flex flex-wrap content-center">
                        <img
                          src={lp1}
                          className="w-full rounded-tr-3xl rounded-bl-3xl clip"
                          alt=""
                        />
                      </div>
                    </a>
                  </div>
                  <div className="relative">
                    <a className="absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-50 duration-300 text-primary font-inter">
                      <h1 className="tracking-wider font-semibold">
                        Land Development at Bay Terminal
                      </h1>
                    </a>
                    <a href="#" className="relative">
                      <div className="flex flex-wrap content-center">
                        <img
                          src={lp2}
                          className="w-full rounded-tr-3xl rounded-bl-3xl"
                          alt=""
                        />
                      </div>
                    </a>
                  </div>
                  <div className="relative">
                    <a className="absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-50 duration-300 text-primary font-inter">
                      <h1 className="tracking-wider font-semibold">
                        Govrakura Land Port Ofﬁce complex
                      </h1>
                    </a>
                    <a href="#" className="relative">
                      <div className="flex flex-wrap content-center">
                        <img
                          src={lp3}
                          className="w-full rounded-tr-3xl rounded-bl-3xl"
                          alt=""
                        />
                      </div>
                    </a>
                  </div>
                  <div className="relative">
                    <a className="absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-50 duration-300 text-primary font-inter">
                      <h1 className="tracking-wider font-semibold">
                        Govrakura Land Port Yard
                      </h1>
                    </a>
                    <a href="#" className="relative">
                      <div className="flex flex-wrap content-center">
                        <img
                          src={lp4}
                          className="w-full rounded-tr-3xl rounded-bl-3xl"
                          alt=""
                        />
                      </div>
                    </a>
                  </div>
                  <div className="relative">
                    <a className="absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-50 duration-300 text-primary font-inter">
                      <h1 className="tracking-wider font-semibold">
                        Govrakura Land Port Gate
                      </h1>
                    </a>
                    <a href="#" className="relative">
                      <div className="flex flex-wrap content-center">
                        <img
                          src={lp5}
                          className="w-full rounded-tr-3xl rounded-bl-3xl"
                          alt=""
                        />
                      </div>
                    </a>
                  </div>
                  <div className="relative">
                    <a className="absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-50 duration-300 text-primary font-inter">
                      <h1 className="tracking-wider font-semibold">
                        Laldiya Boundary wall
                      </h1>
                    </a>
                    <a href="#" className="relative">
                      <div className="flex flex-wrap content-center">
                        <img
                          src={lp6}
                          className="w-full rounded-tr-3xl rounded-bl-3xl"
                          alt=""
                        />
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div
                id="horizontal-scroll-tab-2"
                className="hidden"
                role="tabpanel"
                aria-labelledby="horizontal-scroll-tab-item-2"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-none p-2 md:p-0 gap-4">
                  <div className="relative">
                    <a className="absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-50 duration-300 text-primary font-inter">
                      <h1 className="tracking-wider font-semibold">
                        Electro-mechanical Works at PCT
                      </h1>
                    </a>
                    <a href="#" className="relative">
                      <div className="flex flex-wrap content-center">
                        <img
                          src={lp7}
                          className="w-full rounded-tr-3xl rounded-bl-3xl clip"
                          alt=""
                        />
                      </div>
                    </a>
                  </div>
                  <div className="relative">
                    <a className="absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-50 duration-300 text-primary font-inter">
                      <h1 className="tracking-wider font-semibold">
                        PPFT Land Development_1
                      </h1>
                    </a>
                    <a href="#" className="relative">
                      <div className="flex flex-wrap content-center">
                        <img
                          src={lp8}
                          className="w-full rounded-tr-3xl rounded-bl-3xl"
                          alt=""
                        />
                      </div>
                    </a>
                  </div>
                  <div className="relative">
                    <a className="absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-50 duration-300 text-primary font-inter">
                      <h1 className="tracking-wider font-semibold">
                        PPFT Land Development_2
                      </h1>
                    </a>
                    <a href="#" className="relative">
                      <div className="flex flex-wrap content-center">
                        <img
                          src={lp9}
                          className="w-full rounded-tr-3xl rounded-bl-3xl"
                          alt=""
                        />
                      </div>
                    </a>
                  </div>
                  <div className="relative">
                    <a className="absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-50 duration-300 text-primary font-inter">
                      <h1 className="tracking-wider font-semibold">
                        Land Development by Sand Pile
                      </h1>
                    </a>
                    <a href="#" className="relative">
                      <div className="flex flex-wrap content-center">
                        <img
                          src={lp10}
                          className="w-full rounded-tr-3xl rounded-bl-3xl"
                          alt=""
                        />
                      </div>
                    </a>
                  </div>
                  <div className="relative">
                    <a className="absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-50 duration-300 text-primary font-inter">
                      <h1 className="tracking-wider font-semibold">
                        Level Checking for yard
                      </h1>
                    </a>
                    <a href="#" className="relative">
                      <div className="flex flex-wrap content-center">
                        <img
                          src={lp11}
                          className="w-full rounded-tr-3xl rounded-bl-3xl"
                          alt=""
                        />
                      </div>
                    </a>
                  </div>
                  <div className="relative">
                    <a className="absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-50 duration-300 text-primary font-inter">
                      <h1 className="tracking-wider font-semibold">
                        Boring works for Earthing System
                      </h1>
                    </a>
                    <a href="#" className="relative">
                      <div className="flex flex-wrap content-center">
                        <img
                          src={lp12}
                          className="w-full rounded-tr-3xl rounded-bl-3xl"
                          alt=""
                        />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div
                id="horizontal-scroll-tab-3"
                className="hidden"
                role="tabpanel"
                aria-labelledby="horizontal-scroll-tab-item-3"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-none p-2 md:p-0 gap-4">
                  <div className="relative">
                    <a className="absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-50 duration-300 text-primary font-inter">
                      <h1 className="tracking-wider font-semibold">
                        Electro-mechanical Works at PCT
                      </h1>
                    </a>
                    <a href="#" className="relative">
                      <div className="flex flex-wrap content-center">
                        <img
                          src={lp13}
                          className="w-full rounded-tr-3xl rounded-bl-3xl clip"
                          alt=""
                        />
                      </div>
                    </a>
                  </div>
                  <div className="relative">
                    <a className="absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-50 duration-300 text-primary font-inter">
                      <h1 className="tracking-wider font-semibold">
                        PPFT Land Development_1
                      </h1>
                    </a>
                    <a href="#" className="relative">
                      <div className="flex flex-wrap content-center">
                        <img
                          src={lp14}
                          className="w-full rounded-tr-3xl rounded-bl-3xl"
                          alt=""
                        />
                      </div>
                    </a>
                  </div>
                  <div className="relative">
                    <a className="absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-50 duration-300 text-primary font-inter">
                      <h1 className="tracking-wider font-semibold">
                        PPFT Land Development_2
                      </h1>
                    </a>
                    <a href="#" className="relative">
                      <div className="flex flex-wrap content-center">
                        <img
                          src={lp15}
                          className="w-full rounded-tr-3xl rounded-bl-3xl"
                          alt=""
                        />
                      </div>
                    </a>
                  </div>
                  <div className="relative">
                    <a className="absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-50 duration-300 text-primary font-inter">
                      <h1 className="tracking-wider font-semibold">
                        Land Development by Sand Pile
                      </h1>
                    </a>
                    <a href="#" className="relative">
                      <div className="flex flex-wrap content-center">
                        <img
                          src={lp16}
                          className="w-full rounded-tr-3xl rounded-bl-3xl"
                          alt=""
                        />
                      </div>
                    </a>
                  </div>
                  <div className="relative">
                    <a className="absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-50 duration-300 text-primary font-inter">
                      <h1 className="tracking-wider font-semibold">
                        Level Checking for yard
                      </h1>
                    </a>
                    <a href="#" className="relative">
                      <div className="flex flex-wrap content-center">
                        <img
                          src={lp8}
                          className="w-full rounded-tr-3xl rounded-bl-3xl"
                          alt=""
                        />
                      </div>
                    </a>
                  </div>
                  <div className="relative">
                    <a className="absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-50 duration-300 text-primary font-inter">
                      <h1 className="tracking-wider font-semibold">
                        Boring works for Earthing System
                      </h1>
                    </a>
                    <a href="#" className="relative">
                      <div className="flex flex-wrap content-center">
                        <img
                          src={lp4}
                          className="w-full rounded-tr-3xl rounded-bl-3xl"
                          alt=""
                        />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div
                id="horizontal-scroll-tab-4"
                className="hidden"
                role="tabpanel"
                aria-labelledby="horizontal-scroll-tab-item-4"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-none p-2 md:p-0">
                  <img className="w-full h-auto object-cover" src={p1} />
                  <img className="w-full h-auto object-cover" src={p2} />
                  <img className="w-full h-auto object-cover" src={p3} />
                  <img className="w-full h-auto object-cover" src={p4} />
                  <img className="w-full h-auto object-cover" src={p5} />
                  <img className="w-full h-auto object-cover" src={p6} />
                </div>
              </div>
              <div
                id="horizontal-scroll-tab-5"
                className="hidden"
                role="tabpanel"
                aria-labelledby="horizontal-scroll-tab-item-5"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-none p-2 md:p-0">
                  <img className="w-full h-auto object-cover" src={p1} />
                  <img className="w-full h-auto object-cover" src={p2} />
                  <img className="w-full h-auto object-cover" src={p3} />
                  <img className="w-full h-auto object-cover" src={p4} />
                  <img className="w-full h-auto object-cover" src={p5} />
                  <img className="w-full h-auto object-cover" src={p6} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:block">
          <img src={waveLine2} alt="" className="mt-[30px]" />
        </div>
      </section>
    </>
  );
};

export default LatestProjects;
