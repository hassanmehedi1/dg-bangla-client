import Fade from "react-reveal/Fade";

const MileStone = () => {
  return (
    <>
      <section className="font-ubuntu max-w-[1920px] mx-auto bg-gray-200">
        <div className="flex justify-center gap-4 items-center pt-12 pb-6">
          <div className="flex flex-col">
            <hr className="border-t-2 border-primary w-8 ml-auto" />
            <hr className="border-t-2 border-primary w-5 mt-3 ml-auto" />
          </div>

          <Fade bottom>
            <h1 className="font-roboto text-2xl md:text-[35px] font-[700] uppercase">
              <span className="text-primary">our</span> milestones
            </h1>
          </Fade>

          <div className="flex flex-col ">
            <hr className="border-t-2 border-primary w-8" />
            <hr className="border-t-2 border-primary w-5 mt-3" />
          </div>
        </div>

        <div className="flex justify-center pt-10 font-ubuntu">
          <div className="w-auto md:w-3/4 mx-auto">
            {/* first milestone  */}

            <div className="flex flex-row w-full justify-center group">
              {/* <!-- left col --> */}

              <Fade left>
                <div className="w-2/5 relative">
                  <div className="flex items-center">
                    <div className="flex flex-col w-full rounded-lg shadow border-r-[5px] border-primary px-4 py-4 bg-white group-hover:bg-primary group-hover:text-white">
                      <div className="flex justify-between">
                        <div className="font-bold text-[22px] leading-[25px]">
                          <h1>Electrical & Firefighting</h1>
                          <hr className="bg-gradient-to-r from-rose-600 to-white group-hover:bg-gradient-to-l h-[2px] mt-[5px]" />
                        </div>
                        <div className="flex flex-row"></div>
                      </div>
                      <div className="text-[20px] leading-[23px] mt-2 text-justify">
                        Started Electrical & Fire Fighting works in Payra &
                        Chattogram Port.
                      </div>
                    </div>

                    <div className="w-32 bg-primary h-1 flex items-center"></div>
                  </div>
                </div>
              </Fade>

              <div className="flex justify-center">
                <div className="relative flex h-full w-2 bg-primary items-center justify-center">
                  <div className="absolute flex flex-col justify-center h-32 w-32 rounded-full border leading-none text-center z-10 shadow-md shadow-red-400/40 bg-white">
                    <div className="w-20 h-20 border-[3px] border-primary rounded-full flex flex-col items-center justify-center mx-auto group-hover:bg-primary">
                      <h1 className="text-primary group-hover:text-white font-ubuntu text-[20px] font-bold">
                        2022
                      </h1>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-2/5 px-2"></div>
            </div>

            <div className="flex flex-row w-full justify-center group">
              {/* <!-- left col --> */}

              <div className="w-2/5 px-2 py-5"></div>
              {/* <!--line column--> */}
              <div className="flex justify-center">
                <div className="relative flex h-full w-2 bg-primary items-center justify-center">
                  <div className="absolute flex flex-col justify-center h-32 w-32 rounded-full border leading-none text-center z-10 shadow-md shadow-red-400/40 bg-white">
                    <div className="w-20 h-20 border-[3px] border-primary rounded-full flex flex-col items-center justify-center mx-auto group-hover:bg-primary">
                      <h1 className="text-primary group-hover:text-white font-ubuntu text-[20px] font-bold">
                        2021
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!--right column--> */}
              <Fade right>
                <div className="w-2/5 px-2 py-10 ">
                  <div className="flex items-center flex-row-reverse">
                    <div className="flex flex-col w-full rounded-lg shadow border-l-[5px] border-primary px-4 py-5 bg-white group-hover:bg-primary group-hover:text-white">
                      <div className="mb-2 flex justify-between">
                        <div className="font-bold text-[22px] leading-[25px]">
                          <h1>Building Construction Works</h1>
                          <hr className="bg-gradient-to-r from-rose-600 to-white group-hover:bg-gradient-to-l h-[2px] mt-[5px]" />
                        </div>
                      </div>
                      <div className="text-[20px] leading-[23px] text-justify">
                        Engaged in dredging operations, river bank protection,
                        building construction, and projects with both the Public
                        Works Department (PWD) and Sheba Authority.
                      </div>
                    </div>

                    <div className="w-32 bg-primary h-1 flex items-center"></div>
                  </div>
                </div>
              </Fade>
            </div>

            <div className="flex flex-row w-full justify-center group">
              {/* <!-- left col --> */}

              <Fade left>
                <div className="w-2/5 px-2 pb-5 mt-5">
                  <div className="flex items-center">
                    <div className="flex flex-col w-full rounded-lg shadow border-r-[5px] border-primary px-4 py-5 bg-white group-hover:bg-primary group-hover:text-white">
                      <div className="mb-2 flex justify-between">
                        <div className="font-bold text-[22px] leading-[25px]">
                          <h1>Road Construction & Treatment Plant</h1>
                          <hr className="bg-gradient-to-r from-rose-600 to-white h-[2px] mt-[5px] group-hover:bg-gradient-to-l" />
                        </div>
                        <div className="flex flex-row"></div>
                      </div>
                      <div className="text-[20px] leading-[23px] text-justify">
                        Started Road construction projects and executed an EPC
                        (Engineering, Procurement, and Construction) contract
                        for a fecal treatment plant.
                      </div>
                    </div>

                    <div className="w-32 bg-primary h-1 flex items-center"></div>
                  </div>
                </div>
              </Fade>
              {/* <!--line column--> */}
              <div className="flex justify-center">
                <div className="relative flex h-full w-2 bg-primary items-center justify-center">
                  <div className="absolute flex flex-col justify-center h-32 w-32 rounded-full border leading-none text-center z-10 shadow-md shadow-red-400/40 bg-white">
                    <div className="w-20 h-20 border-[3px] border-primary rounded-full flex flex-col items-center justify-center mx-auto group-hover:bg-primary">
                      <h1 className="text-primary group-hover:text-white font-ubuntu text-[20px] font-bold">
                        2019
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!--right column--> */}
              <div className="w-2/5 px-2 py-10"></div>
            </div>

            <div className="flex flex-row w-full justify-center group">
              {/* <!-- left col --> */}

              <div className="w-2/5 px-2 py-10"></div>
              {/* <!--line column--> */}
              <div className="flex justify-center">
                <div className="relative flex h-full w-2 bg-primary items-center justify-center">
                  <div className="absolute flex flex-col justify-center h-32 w-32 rounded-full border leading-none text-center z-10 shadow-md shadow-red-400/40 bg-white">
                    <div className="w-20 h-20 border-[3px] border-primary rounded-full flex flex-col items-center justify-center mx-auto group-hover:bg-primary">
                      <h1 className="text-primary group-hover:text-white font-ubuntu text-[20px] font-bold">
                        2017
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!--right column--> */}
              <Fade right>
                <div className="w-2/5 px-2 py-10">
                  <div className="flex items-center flex-row-reverse">
                    <div className="flex flex-col w-full rounded-lg shadow border-l-[5px] border-primary px-4 py-5 bg-white group-hover:bg-primary group-hover:text-white">
                      <div className="mb-2 flex justify-between">
                        <div className="font-bold text-[22px] leading-[25px]">
                          <h1>Infrustructure & Rcc open yard</h1>
                          <hr className="bg-gradient-to-r from-primary to-white h-[2px] mt-[5px] group-hover:bg-gradient-to-l" />
                        </div>
                      </div>
                      <div className="text-[20px] leading-[23px] text-justify">
                        Collaborated with the Bangladesh Land Port Authority.
                      </div>
                    </div>

                    <div className="w-32 bg-primary h-1 flex items-center"></div>
                  </div>
                </div>
              </Fade>
            </div>

            <div className="flex flex-row w-full justify-center group">
              {/* <!-- left col --> */}

              <Fade left>
                <div className="w-2/5 px-2 py-10">
                  <div className="flex items-center">
                    <div className="flex flex-col w-full rounded-lg shadow border-r-[5px] border-primary px-4 py-5 bg-white group-hover:bg-primary group-hover:text-white">
                      <div className="mb-2 flex justify-between">
                        <div className="font-bold text-[22px] leading-[25px]">
                          <h1>Automation Works</h1>
                          <hr className="bg-gradient-to-r from-rose-600 to-white h-[2px] mt-[5px] group-hover:bg-gradient-to-l" />
                        </div>
                        <div className="flex flex-row"></div>
                      </div>
                      <div className="text-[20px] leading-[23px] text-justify">
                        Revolutionized Industries through Innovative Automation
                        Solutions for Enhanced Efficiency and
                        Streamlined Operations.
                      </div>
                    </div>

                    <div className="w-32 bg-primary h-1 flex items-center"></div>
                  </div>
                </div>
              </Fade>
              {/* <!--line column--> */}
              <div className="flex justify-center">
                <div className="relative flex h-full w-2 bg-primary items-center justify-center">
                  <div className="absolute flex flex-col justify-center h-32 w-32 rounded-full border leading-none text-center z-10 shadow-md shadow-red-400/40 bg-white">
                    <div className="w-20 h-20 border-[3px] border-primary rounded-full flex flex-col items-center justify-center mx-auto group-hover:bg-primary">
                      <h1 className="text-primary group-hover:text-white font-ubuntu text-[20px] font-bold">
                        2017
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!--right column--> */}
              <div className="w-2/5 px-2 py-5"></div>
            </div>

            <div className="flex flex-row w-full justify-center group">
              {/* <!-- left col --> */}

              <div className="w-2/5 px-2 py-10"></div>
              {/* <!--line column--> */}
              <div className="flex justify-center">
                <div className="relative flex h-full w-2 bg-primary items-center justify-center">
                  <div className="absolute flex flex-col justify-center h-32 w-32 rounded-full border leading-none text-center z-10 shadow-md shadow-red-400/40 bg-white">
                    <div className="w-20 h-20 border-[3px] border-primary rounded-full flex flex-col items-center justify-center mx-auto group-hover:bg-primary">
                      <h1 className="text-primary group-hover:text-white font-ubuntu text-[20px] font-bold">
                        2012
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!--right column--> */}
              <Fade right>
                <div className="w-2/5 px-2 py-10">
                  <div className="flex items-center flex-row-reverse">
                    <div className="flex flex-col w-full rounded-lg shadow border-l-[5px] border-primary px-4 py-5 bg-white group-hover:bg-primary group-hover:text-white">
                      <div className="mb-2 flex justify-between">
                        <div className="font-bold text-[22px] leading-[25px]">
                          <h1>Starting</h1>
                          <hr className="bg-gradient-to-r from-primary to-white h-[2px] mt-[5px] group-hover:bg-gradient-to-l" />
                        </div>
                      </div>
                      <div className="text-[20px] leading-[23px] text-justify">
                        Civil construction has commenced as the main contractor.
                      </div>
                    </div>

                    <div className="w-32 bg-primary h-1 flex items-center"></div>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MileStone;
