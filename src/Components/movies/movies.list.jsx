import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { BiHeart } from "react-icons/bi";
import Carousel from "react-elastic-carousel";
import Items from "./items";
import Slider from "react-slick";
import { settings } from "../../Config/react-slick";
import { useEffect, useRef, useState } from "react";
import SectionTitle from "./title";


const images =[
    require('../../asset/header/background-image/Poster.png'),
    require('../../asset/account_creation/auth_logo.png'),
    require('../../asset/header/navbar/Menu.png'),
    require('../../asset/header/navbar/PngItem_1381056 1.png'),
    require('../../asset/header/background-image/Poster.png'),
    require('../../asset/account_creation/auth_logo.png'),
    require('../../asset/header/navbar/Menu.png'),
    require('../../asset/header/navbar/PngItem_1381056 1.png')
]
const MovieList = ({initialSlide=0}) => {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 },
        { width: 1500, itemsToShow: 5 },
      ];
    const [hasSetPosition, setHasSetPosition] = useState(false);
    const slider = useRef();

    
    useEffect(() => {
        if (slider.current && !hasSetPosition) {
          slider.current.slickGoTo(initialSlide);
          setHasSetPosition(true);
        }
      }, [initialSlide, hasSetPosition, slider]);
    return ( 
        <>
        <SectionTitle title="featured"/>
        <Box  marginTop="44px" style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}} w="100%">
        <Box w={{base: "calc(100% - 40px)", md:"calc(100% - 70px)", lg:"calc(100% - 220px)"}}>
            <Slider {...settings}>
            {
                images.map((res)=>{
        return (
                <Flex  className="Movie_content_wrapper" direction="column" gap="12px" h="490px" w="250px" padding="0px" alignItems="flex-start">
                    {/* Start of image poster and it rating  */}
                    <Box style={getImages(res)}  className="poster_image" h="370px" w="250px">
                        <Flex className="poster_rating" direction="row" justifyContent="center"  w="100%">
                            <Flex boxSizing="border-box" justifyContent="space-between" marginTop="15.58px" pos="absolute" w={{base: "calc(250px - 20px)", md:"calc(250px - 27px)", lg:"calc(250px - 32px)"}}>
                                <Flex className="tv_series_wrapper" gap="10px" padding="3px 8px" h="22px" background="rgba(243, 244, 246, 0.5)"
                                backdropFilter="blur(1px)" borderRadius="12px"
                                >
                                    <Text className="tv_series_content" >TV SERIES</Text>
                                </Flex>
                                <Flex className="tv_series_heart" h="29.21px"  right="16px">
                                    <Flex borderRadius="50%" justifyContent="center" alignItems="center" padding="3px" h="19.20px" w="20px" bg="#D1D5DB"><BiHeart /></Flex>                                

                                </Flex>
                            </Flex>
                        </Flex>
                    </Box>
                    {/* End of image rating*/}
                </Flex>
        )})}
            </Slider>
        </Box>
        </Box>
        </>

     );
}
 
export default MovieList;

const getImages =(img) =>{
    return {
        borderRadius: '0px',
        background: `linear-gradient(to right, rgba(0, 0, 0, 0.01), rgba(0, 0, 0, 0.01)), 
                    url(${img})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    }
}
