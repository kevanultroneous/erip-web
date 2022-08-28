import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from "react-icons/hi";
export const calenderslidersettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <HiOutlineArrowSmRight color="#000" />,
  prevArrow: <HiOutlineArrowSmLeft color="#000" />,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
  ],
};
