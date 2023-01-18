import { Flex, Image, Text } from "@chakra-ui/react";
import './brand.css'

const Brand = () => {
    return ( 
        <Flex padding="0px" marginTop="15px"  alignItems="center" marginLeft={{base: "20px", md: "50px", lg:"96px"}} justifyContent="space-between" w={{base:"110px", md:"120px", lg:"143px"}} h="50px">
            <Flex w="50px" h="50px">
                <Image src={require("../../../asset/header/navbar/tv.png")} alt="TV Image" />
            </Flex>
            <Text className="brand_text" display={{base: 'none', md:"block"}}>Movix</Text>
        </Flex>
     );
}
 
export default Brand;