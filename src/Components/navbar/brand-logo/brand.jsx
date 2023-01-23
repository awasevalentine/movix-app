import { Flex, Image, Text } from "@chakra-ui/react";
import './brand.css'

const Brand = () => {
    return ( 
        <Flex gap="14px"  alignItems="center" justifyContent="space-between" h="50px">
            <Flex w="50px" h="50px">
                <Image src={require("../../../asset/header/navbar/tv.png")} alt="TV Image" />
            </Flex>
            <Text className="brand_text">Barrondy</Text>
        </Flex>
     );
}
 
export default Brand;