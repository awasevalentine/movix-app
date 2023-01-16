import {MdOutlineArrowBackIos, MdOutlineArrowForwardIos} from 'react-icons/md'

const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
        <MdOutlineArrowBackIos display="block" color="black" fontWeight="800"  {...props} > Prev</MdOutlineArrowBackIos>
      );
    
      const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
        <MdOutlineArrowForwardIos display="block" color="black" fontWeight="800" {...props} > Next</MdOutlineArrowForwardIos>
      );

export const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
    
  };
