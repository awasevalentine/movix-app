import { Box, Button, Heading, Stack, Text } from "@chakra-ui/react";
import NavBar from "../navbar";
import Rating from "../../rating/rating";
import Description from "../../description/description";
import {IoPlayCircleOutline}  from "react-icons/io5"
import getMovie from '../../../api/urlCall'
import "./header.style.css"
import { useEffect, useState } from "react";

const image = require('../../../asset/header/background-image/Poster.png')

const HeaderComponent = () => {
    const [movies, setMovies ] = useState([])

   useEffect(()=>{
    const fetchMovies = async()=>{
        const {data} = await getMovie.get("tv/popular")
        if(data.results){
            setMovies(data.results[0])
        }

    }

    fetchMovies()

        fetchMovies()

    })
    return ( 
        <Box  className="header_wrapper" style={header_wrapper2} w="100%" h={{base: '100vh'}}
        >
            <NavBar />
            <Box w={{base:'100%', md:'270px', lg:'404px'}} h="285px" pos="absolute" 
            left={{base:'20px', md:'40px', lg:'98px'}} top={{base:'128px',md:'138px', lg:'158px'}}
            >
                <Heading className="header1">John Wick 3 : Parabellum</Heading>
                <Rating />
                <Description />
                <Stack direction='row' marginTop="22px">
                <Button className="trailer_btn" leftIcon={<IoPlayCircleOutline  w="20px" h="20px" />} 
                bgColor='#BE123C' variant='solid' padding="6px 16px" gap="3px" order="3" flex="none"
                flex-grow="0" borderRadius="6px"
                >
                    Watch trailer
                </Button>
                </Stack>
            </Box>
        </Box>
     );
}
 
export default HeaderComponent;

const header_wrapper2 ={
    borderRadius: '0px',
    background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
                url(${image})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
}