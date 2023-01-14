import { Box, Text } from "@chakra-ui/react";
import "./header.style.css"
import NavBar from "../navbar";

const HeaderComponent = () => {
    return ( 
        <Box  className="header_wrapper">
            <NavBar />
        </Box>
     );
}
 
export default HeaderComponent;