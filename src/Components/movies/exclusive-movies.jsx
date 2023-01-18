import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { BiHeart } from "react-icons/bi";
import Slider from "react-slick";
import { settings } from "../../Config/react-slick";
import { useEffect, useRef, useState } from "react";
import SectionTitle from "./title";
// import { DefaultPlayer as Video } from "react-html5video/";
// import "react-html5video/dist/styles.css"
import me from '../../asset/header/navbar/CRUD with React Redux Toolkit with Firebase _ Introduction #1.mp4'


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
const ExclusiveMovies = ({initialSlide=0}) => {
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
        <SectionTitle title="Exclusive Videos"/>
        <Box  marginTop="44px" style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}} w="100%">
        <Box w={{base: "calc(100% - 40px)", md:"calc(100% - 70px)", lg:"calc(100% - 230px)"}}>
            <Slider {...settings({sm:1, md:1, lg: 2})}>
            {
                images.map((res)=>{
        return (
                <Flex  className="Movie_content_wrapper" direction="column" gap="12px" h="288.12px;" w="450px" padding="0px" alignItems="flex-start">
                    {/* Start of Video display  */}
                    <Box style={getImages(res)}  className="video_player_wrapper" h="253.12px" w="450px">
                        <Flex className="poster_rating" direction="row" justifyContent="center"  w="100%">
                            {/* <Video>
                                <source src={require("../../asset/header/navbar/CRUD with React Redux Toolkit with Firebase _ Introduction #1.mp4")} type="video/mp4"  />
                            </Video> */}
                            <video width="450" height="253.12" controls loop autoplay='m' muted>
                            <source src={me} type="video/mp4"/>
                            {/* <source src="movie.ogg" type="video/ogg" /> */}
                            </video>
                        </Flex>
                    </Box>
                    <Text className="exclusive_video_title" marginTop="12px">John Cena</Text>
                    {/* End of Exclusive videos*/}
                    </Flex>
        )})}
            </Slider>
        </Box>
        </Box>
        </>

     );
}
 
export default ExclusiveMovies;

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
