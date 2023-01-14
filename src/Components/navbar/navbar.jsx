import { Box, Flex, Image, Text } from "@chakra-ui/react";
import "./navbar.style.css"
import { Navigate, useNavigate } from "react-router-dom";
import SearchBar from "./searchBar/search.bar";
import NavBarMenu from "./navbarMenu/navbar.menu";

const NavBar = () => {
    const navigate = useNavigate()
    return ( 
        <Flex direction="row" h="80px" >
            <Flex direction="row" gap="24px" alignItems="center" padding="0px" pos="absolute" 
                h="50px" w="143px" left="95px" top="15px" cursor="pointer" onClick={()=> navigate('/sign-in')}
            >
                <Image src={require("../../asset/header/navbar/tv.png")} h="50px" w="50px" alt="TV Image" />
                <Text className="logo_text" h="24px" w="69px">
                    Movix
                </Text>
            </Flex>

            <SearchBar />
            <NavBarMenu/>

        </Flex>
     );
}
 
export default NavBar;