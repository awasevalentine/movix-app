import { Box, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { BiHeart } from "react-icons/bi";
import Slider from "react-slick";
import { settings } from "../../Config/react-slick";
import { useEffect, useRef, useState } from "react";
import SectionTitle from "./title";

const MovieList = ({initialSlide=0, params, title}) => {
    console.log("here is the image: ", params)

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
        <SectionTitle title={title}/>
        <Box  marginTop={{base:'-24px',md:'-30px', lg:"-30px"}} style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}} w="100%">
        <Box w={{base: "calc(100% - 40px)", md:"calc(100% - 70px)", lg:"calc(100% - 230px)"}}>
            <Slider {...settings({sm: 1, md: 2, lg: 3, xl:4})}>
            {
        params.map((res, key)=>{
        return (
                <Flex key={key} _hover={{lg: {transform: 'scale(1.1)', transition: 'transform 1s'}}} className="Movie_content_wrapper" direction="column" gap="12px" h="490px" w={{base: '100%'}} padding="0px" alignItems="flex-start">
                    {/* Start of image poster and it rating  */}
                    <Flex className="poster_rating_content" zIndex="10" boxSizing="border-box" pos="relative" top="50px" left="10px" justifyContent="space-between" marginTop="15.58px" w={{base: "calc(100% - 20px)", md:"calc(250px - 27px)", lg:"calc(250px - 32px)"}}>
                        <Flex _hover={{boxShadow: '10px 10px 10px', transform:'scale(1.1)'}} cursor="pointer" onClick={()=>alert("this is tv series")} className="tv_series_wrapper" gap="10px" padding="3px 8px" h="22px" background="rgba(243, 244, 246, 0.5)"
                        backdropFilter="blur(1px)" borderRadius="12px"
                        >
                            <Text className="tv_series_content" >TV SERIES</Text>
                        </Flex>
                        <Flex cursor="pointer" className="tv_series_heart" h="29.21px"  right="16px">
                            <Flex _hover={{boxShadow: '3px 3px 3px', transform:'scale(1.1)' }} borderRadius="50%" justifyContent="center" alignItems="center" padding="3px" h="19.20px" w="20px" bg="#D1D5DB"><BiHeart /></Flex>                                
                        </Flex>
                    </Flex>
                    <SimpleGrid cursor="pointer" onClick={()=>alert("this is main")}  columns={{sm: 1, md:5}} gap="20px" style={{background: `linear-gradient(to right, rgba(0, 0, 0, 0.01), rgba(0, 0, 0, 0.01)), 
                    url(${process.env.REACT_APP_IMG_URL}${res.poster_path})`,}} className="poster_image" borderRadius="5px" h="370px" w={{base: '100%', md:"100%"}}>
                    </SimpleGrid>
                    {/* End of image rating*/}
                    {/* Section for Movie Details */}
                    <Text marginTop="12px" className="movie_date">{res.first_air_date ? res.first_air_date : res.release_date}</Text>
                    <Text marginTop="12px" className="movie_title">{res.name ? res.name : res.original_title}</Text>
                    <Flex direction="row" padding="0px" gap="32px" justifyContent="space-between" h="17px" flex="none" row="3" flexGrow="0">
                    <Flex direction="row" className="idbm_wrapper" padding="0px" gap="10px" h={{base:'12px', md:"17px"}}>
                        <Image src={require('../../asset/header/navbar/idbm.png')} w={{base:'25px', md:"35px"}} h={{base:'12px', md:"17px"}} />
                    <Text className="movie_rating_text">{res.vote_average.toFixed(1)}/100</Text>
                    </Flex>
                    <Flex direction="row" alignItems="center" padding="0px" gap="10px" h={{base:'12px', md:"17px"}} className="rotten_tomatos_wrpaper">
                        <Image src={require('../../asset/header/navbar/tomatos.png')} w={{base:'12px',md:"16px"}} h={{base:'12px', md:"17px"}} />
                        <Text className="movie_rating_text">
                            {res.vote_average.toFixed(0)}%
                        </Text>
                    </Flex>
                    </Flex>
                </Flex>
        )})}
            </Slider>
        </Box>
        </Box>
        </>

     );
}
 
export default MovieList;
