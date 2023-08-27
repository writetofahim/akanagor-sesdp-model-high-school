import React from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import Slider from "react-slick";
import Typed from "react-typed";
// Import css files
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <GrNext
      className="md:block text-4xl md:text-5xl absolute right-0 top-1/2 cursor-pointe opacity-30 hover:opacity-100 hover:bg-primary-300 hover:text-white cursor-pointer transition-all -translate-y-[100%] p-2 translate-x-[20%] rounded-full"
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <GrPrevious
      className="md:block z-10 text-4xl md:text-5xl absolute left-0 top-1/2 cursor-pointe opacity-30 hover:opacity-100 hover:bg-primary-300 hover:text-white cursor-pointer transition-all -translate-y-[100%]  p-2 -translate-x-[20%] rounded-full"
      onClick={onClick}
    />
  );
}

var settings = {
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
  autoplay: true,
  autoplaySpeed: 5000,
  cssEase: "linear",
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

export const SingleSlide = (props) => {
  // console.log(props.title);
  return (
    <div className="">
      <div className="relative">
        <img
          src={props.image}
          alt={props.title}
          className="w-full md:h-96 h-72 object-cover"
        />
        <div className="absolute left-0 bottom-0  md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-auto w-full">
          {/* text */}
          <div className="left backdrop-blur-sm p-5 md:rounded-md">
            <h2 className=" text-md md:text-2xl text-center md:text-left font-bold mb-2">
              {props.title}
            </h2>
            <div className="flex">
              <Typed
                className="text-white text-sm md:text-xl w-full text-center mb-2 "
                strings={[props.description]}
                typeSpeed={100}
                backSpeed={50}
                loop
              />
            </div>
            {/* <p className="mb-5 text-gray-300 text-xl text-center md:text-left md:text-2xl font-bold">
              {props.subtitle}
            </p>
            <div className="flex justify-center md:justify-start gap-5 items-center mb-5">
              <p className="md:w-2/3 w-4/5 text-sm md:text-xl text-center md:text-left text-textColor-500">
                {props.description}
              </p>
            </div> */}
            {/* {
            props.button_link && (
              <Link to={props.button_link}>
                <button className='bg-secondary-400 hover:bg-secondary-300 px-10 py-3 text-white rounded-sm hover:scale-110 transition-all font-bold mt-2 flex items-center gap-3'>
                  {props.button_text} <BsArrowRight />
                </button>
              </Link>
            )
          } */}
          </div>
        </div>
      </div>
    </div>
  );
};

function HeroSlide({ heroData }) {
  return (
    <div className="w-full">
      <Slider {...settings} className="">
        {heroData &&
          heroData.map((item, index) => <SingleSlide key={index} {...item} />)}
      </Slider>
    </div>
  );
}

export default HeroSlide;
