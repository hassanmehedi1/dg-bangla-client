import Carousel from "react-multi-carousel";

export default function ProjectModal({ data, onClose }) {
  // console.log(data);
  return (
    <>
      <section className="relative">
        {/* Carousel */}
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          className=""
          containerClass=""
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 1,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 1,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {data?.images?.map((image, index) => (
            <img
              src={image}
              key={index}
              className="w-full md:h-[400px] object-contain"
            />
          ))}
        </Carousel>
        <div className="font-ubuntu md:flex justify-between">
          <div className="bg-primary text-white text-center md:w-1/3">
            <p className="text-start ml-4 py-2">
              {data?.category} ({data?.duration})
            </p>
            <hr />
            <h1 className="md:text-xl font-semibold text-start ml-4 md:mt-6">
              {data?.title}
            </h1>
          </div>
          <div className="md:w-2/3 p-4">
            <h1 className="text-[20px] font-bold leading-5">Overview</h1>
            <p className="mt-2 md:leading-5 text-justify text-sm md:text-base overflow-hidden">
              {data?.overview}
            </p>
          </div>
        </div>

        <button className="absolute top-0 right-0 p-2 z-10" onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#A8223B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-circle-x"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="m15 9-6 6" />
            <path d="m9 9 6 6" />
          </svg>
        </button>
      </section>
    </>
  );
}
