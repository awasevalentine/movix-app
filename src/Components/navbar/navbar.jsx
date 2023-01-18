import { Box, Flex, Image, Text } from "@chakra-ui/react";
import "./navbar.style.css"
import { Navigate, useNavigate } from "react-router-dom";
import SearchBar from "./searchBar/search.bar";
import NavBarMenu from "./navbarMenu/navbar.menu";
import Brand from "./brand-logo/brand";

const NavBar = () => {
    const navigate = useNavigate()
    return ( 
        <Flex direction="row" h="80px" w="100%" justifyContent="space-between" >
            <Box  ><Brand /></Box>
            <Box><SearchBar /></Box>
            <Box><NavBarMenu/></Box>

        </Flex>
     );
}
 
export default NavBar;