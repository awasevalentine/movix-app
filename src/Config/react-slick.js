import {MdOutlineArrowBackIos, MdOutlineArrowForwardIos} from 'react-icons/md'

const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
        <MdOutlineArrowBackIos display="block" color="black" fontWeight="800"  {...props} > Prev</MdOutlineArrowBackIos>
      );
    
      const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
        <MdOutlineArrowForwardIos display="block" color="black" fontWeight="800" {...props} > Next</MdOutlineArrowForwardIos>
      );

export const settings =(movie) =>{
 return {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: movie.lg,
    slidesToScroll: movie.lg,
    initialSlide: 0,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: movie.xl,
          slidesToScroll: movie.xl,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: movie.lg,
          slidesToScroll: movie.lg,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: movie.md,
          slidesToScroll: movie.md,
          initialSlide: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: movie.sm,
          slidesToScroll: 1
        }
      }
    ]
    
  };
}
