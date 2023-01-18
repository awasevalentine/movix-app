import { Box, Flex, Text } from "@chakra-ui/react";
import {FaFacebookSquare,FaInstagram, FaTwitter,FaYoutube } from 'react-icons/fa'
import './footer.style.css'

const Footer = () => {
    return ( 
        <Flex  w="100%" justifyContent="center">
            <Flex direction="column" h="145.43px" marginTop="120px" marginBottom="62.54px" justifyContent="center" w={{base:"90%", md:"420px", lg:"492px"}}>
                <Flex className="social_media" justifyContent="center">
                    <Flex justifyContent="space-between" padding="0px" w={{base:"180px", md: "200px", lg:"240px"}}>
                        <Box><FaFacebookSquare size="27.43px" /></Box>
                        <Box><FaInstagram size="27.43px" /></Box>
                        <Box><FaTwitter size="27.43px" /></Box>
                        <Box><FaYoutube size="27.43px" /></Box>
                    </Flex>
                </Flex>
                <Flex className="links_wrapper" marginTop="36px" justifyContent="space-between">
                <Box><Text className="links_item">Conditions of Use</Text></Box>
                <Box><Text className="links_item">Privacy & Policy</Text></Box>
                <Box><Text className="links_item">Press Room</Text></Box>
                </Flex>
                <Flex justifyContent="center" marginTop="36px">
                    <Text className="copy_right" textAlign="center">&copy; 2021 Movix</Text>
                </Flex>
            </Flex>

        </Flex>
     );
}
 
export default Footer;