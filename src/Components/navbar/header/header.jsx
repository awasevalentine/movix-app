import { Box, Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import NavBar from "../navbar";
import Rating from "../../rating/rating";
import Description from "../../description/description";
import {IoPlayCircleOutline}  from "react-icons/io5"
import getMovie from '../../../api/urlCall'
import "./header.style.css"
import { useEffect, useState } from "react";

const HeaderComponent = () => {
    const [movies, setMovies ] = useState([])


   useEffect(()=>{
    const fetchMovies = async()=>{
        const {data} = await getMovie.get("search/movie?&query=john wick 3&append_to_response=videos")
        if(data.results){
            setMovies(data.results[0])
        }
    }

    // const {data} = await axios.get(`${MOVIE_API}movie/${id}`, {
    //     params: {
    //         api_key: API_KEY,
    //         append_to_response: "videos"
    //     }
    // })

    fetchMovies()
    // console.log("FIrst: ", movies)
    },[movies])


    return ( 
        <Box  className="header_wrapper"  position="relative" w="100%" h="100vh"
        style={{borderRadius: '0px',background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
                        url(${process.env.REACT_APP_IMG_URL}${movies.backdrop_path})`,
        }}>
        <Box pos="absolute" w="100%" h="100%" boxSizing="border-box">
            <Box position="fixed" zIndex="1">
                <NavBar/>
            </Box>
            <Box  w={{base:'100%', md:'270px', lg:'404px'}} h="285px" pos="absolute" 
            left={{base:'20px', md:'40px', lg:'98px'}} top={{base:'128px',md:'138px', lg:'158px'}}
            >
                <Heading className="header1">{movies.title}</Heading>
                <Rating rating={movies.vote_average}/>
                <Description text={movies.overview} />
                <Stack direction='row' marginTop="22px">
                <Button className="trailer_btn"  leftIcon={<IoPlayCircleOutline  w={{base:'15px', md:"20px"}} h={{base:'15px', md:"20px"}} />} 
                bgColor='#BE123C' variant='solid' padding="6px 16px" gap="3px" order="3" flex="none"
                flex-grow="0" borderRadius="6px"
                >
                    Watch trailer
                </Button>
                </Stack>
            </Box>
        </Box>
        </Box>
     );
}
 
export default HeaderComponent;