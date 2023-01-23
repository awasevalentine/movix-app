import { Box, Flex, Image, Show, Text } from "@chakra-ui/react";
import "./navbar.style.css"
import { Navigate, useNavigate } from "react-router-dom";
import SearchBar from "./searchBar/search.bar";
import NavBarMenu from "./navbarMenu/navbar.menu";
import { BiSearch } from 'react-icons/bi'
import Brand from "./brand-logo/brand";
import { useEffect, useState } from "react";

const NavBar = () => {
    const navigate = useNavigate()
    const [show, setShow ] =useState(false)
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
        document.getElementById("Navb_wrapper").style.backgroundColor="#001253";
        // document.getElementById("logo").style.fontSize = "25px";
    } else {
        document.getElementById("Navb_wrapper").style.backgroundColor="transparent";
    }
    }

    useEffect(()=>{
        // if(show){
        //     document.getElementById("search_wrapper").style.height="110px"
        // }else{
        //     document.getElementsByClassName("")
        // }
    })

    return ( 
        <Box pos="fixed" zIndex="1" w="100%" id="Navb_wrapper">
            <Show above="768px">
            <Flex direction="row" h="90px"  padding={{md: '0px 25px 0px 50px', lg: '0px 58px 0px 96px'}} alignItems="center" justifyContent="space-between" >
                <Brand />
                <SearchBar />
                <NavBarMenu/>
            </Flex>
            </Show>
            <Show below="767px">
            <Flex direction="column" id="search_wrapper">
            <Flex direction="row" alignItems="center" padding='0px 16px 0px 20px' justifyContent="space-between" >
                <Brand />
                <Flex direction="row" h="75px" alignItems="center"  gap="20px">
                    <Flex justifyItems="center" alignItems="center">
                        <BiSearch color="#FFF" onClick={()=> setShow((res)=> !res)} />
                    </Flex>
                    <NavBarMenu/>
                </Flex>
            </Flex>
            <Box className={show ? show : 'searchBtn'} ><SearchBar /></Box>

            </Flex>
            </Show>

        </Box>
     );
}
 
export default NavBar;