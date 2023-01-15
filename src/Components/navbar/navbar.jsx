import { Box, Flex, Image, Text } from "@chakra-ui/react";
import "./navbar.style.css"
import { Navigate, useNavigate } from "react-router-dom";
import SearchBar from "./searchBar/search.bar";
import NavBarMenu from "./navbarMenu/navbar.menu";

const NavBar = () => {
    const navigate = useNavigate()
    return ( 
        <Flex direction="row" h="80px" >
            <Flex direction="row" gap={{base: '15px', md:'18px', xl:"24px"}} alignItems="center" padding="0px" pos="absolute" 
                h={{base:'26px',md:'30px', xl:"50px"}} w={{base: '100px', md:'120px', xl:"143px"}} left={{base: '22px', md:'50px', xl:"95px"}} top="22px" cursor="pointer" onClick={()=> navigate('/sign-in')}
            >
                <Image src={require("../../asset/header/navbar/tv.png")} h={{base: '30px', md:'40px', xl:"50px"}} w={{base: '30px', md:'40px', xl:"50px"}} alt="TV Image" />
                <Text className="logo_text" display={{base:'none', md:'flex'}} h="24px" w={{base:'47px', md:"69px"}}>
                    Movix
                </Text>
            </Flex>

            <SearchBar />
            <NavBarMenu/>

        </Flex>
     );
}
 
export default NavBar;