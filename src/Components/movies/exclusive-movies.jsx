import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { BiHeart } from "react-icons/bi";
import Slider from "react-slick";
import { settings } from "../../Config/react-slick";
import { useEffect, useRef, useState } from "react";
import SectionTitle from "./title";
import {Player, BigPlayButton} from 'video-react'
import Youtube from 'react-youtube-player';
import getMovie from '../../api/urlCall'

// import me from '../../asset/header/navbar/movie.mp4'
import { async } from "@firebase/util";


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
const ExclusiveMovies = ({initialSlide=0, params}) => {
    const [trailer, setTrailer] = useState([])
    const [movies, setMovies ] = useState([])
    // const videoSrc = me;
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
        const fetchMovies = async()=>{
        const {data} = await getMovie.get("movie/latest")
        console.log("wetine: ", data)

        if(data){
        // console.log("wetine: " )

            // data.forEach((res)=>{
            //     if(res.genres[0]){
            //         getMovieData(res.genres[0])
            //     }
            // })
            // setMovies(data.results)
        }
        }

        fetchMovies()
        console.log("the single: ", trailer)

        if (slider.current && !hasSetPosition) {
          slider.current.slickGoTo(initialSlide);
          setHasSetPosition(true);
        }
      }, [trailer,initialSlide, hasSetPosition, slider]);

      const getMovieData = async(id)=>{
        const {data} = await getMovie.get("movie/"+id)
        const result = data.results
        console.log("where is theis")

        if (result.videos && result.videos.results) {
            return result.videos.results.find(vid => {
                if(vid.official === true){
                    const data = {
                        key: result.videos.results[0].key,
                        name: result.videos.results[0].name
                    }
                    setTrailer((prevData)=> ({
                        ...prevData,
                        data
                }))
            // setTrailer(trailer ? trailer : data.videos.results[0])
                }
        })
        // return data.results
      }

    return ( 
        <>
        <SectionTitle title="Exclusive Videos"/>
        <Box  marginTop="44px" style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}} w="100%">
        <Box w={{base: "calc(100% - 40px)", md:"calc(100% - 70px)", lg:"calc(100% - 230px)"}}>
            <Slider {...settings({sm:1, md:1, lg: 2})}>
            {
                trailer.map((res)=>{
        return (
                <Flex  className="Movie_content_wrapper" direction="column" gap="12px" h="288.12px;" w="450px" padding="0px" alignItems="flex-start">
                    {/* Start of Video display  */}
                    <Box className="video_player_wrapper" h="253.12px" w="450px">
                        <Flex className="poster_rating" direction="row" justifyContent="center"  w="100%">
                         {
                            res.genres[0] ? (
                            //     <Player>
                            //     <source src={} />
                            //     <BigPlayButton position="center" />
                            //  </Player>
                            <Youtube
                                videoId={getMovie(res.genres[0])}
                                className={"youtube amru"}
                                containerClassName={"youtube-container amru"}
                                opts={
                                    {
                                        width: '100%',
                                        height: '100%',
                                        playerVars: {
                                            autoplay: 1,
                                            controls: 0,
                                            cc_load_policy: 0,
                                            fs: 0,
                                            iv_load_policy: 0,
                                            modestbranding: 0,
                                            rel: 0,
                                            showinfo: 0,
                                        },
                                    }
                                }
                            />
                            ):(
                                <></>
                            )
                         }
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
}}
 
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
