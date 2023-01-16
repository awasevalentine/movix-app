// import { Box, Flex, Text } from "@chakra-ui/react";
// import { BiHeart } from "react-icons/bi";
// import Carousel from "react-elastic-carousel";
// import Slider from "react-slick";
// import { useEffect, useRef, useState } from "react";
// import {BsArrowRight, BsArrowLeft} from 'react-icons/bs'
// import { MdOutlineArrowForwardIos, MdOutlineArrowBackIos } from 'react-icons/md'
// import './movies.style.css'

import { Flex, Box } from "@chakra-ui/react";


// const images =[
//     require('../../asset/header/background-image/Poster.png'),
//     require('../../asset/account_creation/auth_logo.png'),
//     require('../../asset/header/navbar/Menu.png'),
//     require('../../asset/header/navbar/PngItem_1381056 1.png'),
//     require('../../asset/header/background-image/Poster.png'),
//     require('../../asset/account_creation/auth_logo.png'),
//     require('../../asset/header/navbar/Menu.png'),
//     require('../../asset/header/navbar/PngItem_1381056 1.png'),
//     require('../../asset/header/background-image/Poster.png'),
//     require('../../asset/account_creation/auth_logo.png'),
//     require('../../asset/header/navbar/Menu.png'),
//     require('../../asset/header/navbar/PngItem_1381056 1.png')
// ]


// const Items = ({initialSlide=0}) => {

//     const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
//         <MdOutlineArrowBackIos display="block" color="black" fontWeight="800"  {...props} > Prev</MdOutlineArrowBackIos>
//       );
    
//       const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
//         <MdOutlineArrowForwardIos display="block" fontWeight="800" {...props} > Next</MdOutlineArrowForwardIos>
//       );



//     const [hasSetPosition, setHasSetPosition] = useState(false);
//     const slider = useRef();
  
//     useEffect(() => {
//       if (slider.current && !hasSetPosition) {
//         slider.current.slickGoTo(initialSlide);
//         setHasSetPosition(true);
//       }
//     }, [initialSlide, hasSetPosition, slider]);

//     const settings = {
//         dots: true,
//         infinite: false,
//         speed: 500,
//         slidesToShow: 4,
//         slidesToScroll: 4,
//         initialSlide: 0,
//         prevArrow: <SlickArrowLeft />,
//         nextArrow: <SlickArrowRight />,
//         responsive: [
//           {
//             breakpoint: 1024,
//             settings: {
//               slidesToShow: 3,
//               slidesToScroll: 3,
//               infinite: true,
//               dots: false
//             }
//           },
//           {
//             breakpoint: 600,
//             settings: {
//               slidesToShow: 2,
//               slidesToScroll: 2,
//               initialSlide: 2
//             }
//           },
//           {
//             breakpoint: 480,
//             settings: {
//               slidesToShow: 1,
//               slidesToScroll: 1
//             }
//           }
//         ]
        
//       };

//       function next() {
//         slider.current.slickNext();
//       }
//       function previous() {
//         slider.current.slickPrev();
//       }

//     return ( 
//         <Box gap="80px" margin="60px">
//         <Slider {...settings}>
//           <Box bg='red' gap="80px" >
//             <h3>1</h3>
//           </Box>
//           <Box bg='blue'>
//             <h3>2</h3>
//           </Box>
//           <Box bg='green'>
//             <h3>3</h3>
//           </Box>
//           <Box bg='yellow'>
//             <h3>4</h3>
//           </Box>
//           <Box bg='black'>
//             <h3>5</h3>
//           </Box>
//           <Box bg="green">
//             <h3>6</h3>
//           </Box>
//         </Slider>
//         {/* <div style={{ textAlign: "center" }}>
//           <button className="button" style={{marginRight: '40px'}} onClick={previous}>
//             Previous
//           </button>
//           <button className="button" onClick={next}>
//             Next
//           </button>
//         </div> */}
//         </Box>
//      );
// }
 
// export default Items;

// const getImages =(img) =>{
//     return {
//         borderRadius: '0px',
//         background: `linear-gradient(to right, rgba(0, 0, 0, 0.01), rgba(0, 0, 0, 0.01)), 
//                     url(${img})`,
//         border: 'solid 1px red',
//         backgroundPosition: 'center',
//         backgroundRepeat: 'no-repeat',
//         backgroundSize: 'cover'
//     }
// }


const Items = () => {
    return ( 
        <Flex direction="row" justifyContent="center" >
            <Box h="50px" bg="silver" w="calc(100% - 99px)">

            </Box>
        </Flex>
     );
}
 
export default Items;