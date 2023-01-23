import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { BiHeart } from "react-icons/bi";
import Slider from "react-slick";
import { settings } from "../../Config/react-slick";
import { useEffect, useRef, useState } from "react";
import SectionTitle from "./title";


const images =[
    require('../../asset/header/background-image/Poster.png'),
    require('../../asset/account_creation/auth_logo.png'),
    require('../../asset/header/navbar/Menu.png'),
    require('../../asset/header/navbar/tomatos.png'),
    require('../../asset/header/background-image/Poster.png'),
    require('../../asset/account_creation/auth_logo.png'),
    require('../../asset/header/navbar/Menu.png'),
    require('../../asset/header/navbar/tomatos.png')
]
const FeaturedCast = ({initialSlide=0, params}) => {
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
        <SectionTitle title="Featured Casts"/>
        <Box  marginTop="44px" style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}} w="100%">
        <Box w={{base: "calc(100% - 40px)", md:"calc(100% - 70px)", lg:"calc(100% - 230px)"}}>
            <Slider {...settings({sm:1, md:2, lg: 4})}>
            {
                params.map((res)=>{
        return (
                <Flex  className="Movie_content_wrapper" direction="column" gap="12px" h="405px;" w="250px" padding="0px" alignItems="flex-start">
                    {/* Start of Video display  */}
                    <Box  className="video_player_wrapper" h="370px" w="250px">
                        <Flex className="poster_rating" direction="row" justifyContent="center"  w="100%">
                            <Image src={process.env.REACT_APP_IMG_URL+res.profile_path} alt="None" h="370px" w="250px" />
                        </Flex>
                    </Box>
                    <Text className="exclusive_video_title" marginTop="12px">{res.name}</Text>
                    {/* End of Exclusive videos*/}
                    </Flex>
        )})}
            </Slider>
        </Box>
        </Box>
        </>

     );
}
 
export default FeaturedCast;

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
