import { Box, Flex, Image, Text } from "@chakra-ui/react";
import "./rating.style.css"

const Rating = ({rating}) => {
    const ratingValue = (rating /10)*100
    return ( 
        <Flex direction="row" w={{base:'120px', md:'184px'}} h="17px" marginTop="16px">
            <Flex direction="row" className="idbm_wrapper" padding="0px" gap="10px" w="101px" h="17px">
                <Image src={require('../../asset/header/navbar/idbm.png')}
                    w="35px" h="17px" />
            <Text className="rating_text">{ratingValue.toFixed(1)}/100</Text>
            </Flex>
            <Flex direction="row" marginLeft="34px" alignItems="center" padding="0px" gap="10px" w="49px" h="17px"
            className="rotten_tomatos_wrpaper">
                <Image src={require('../../asset/header/navbar/tomatos.png')}
                w="16px" h="17px" />
            <Text className="rotten_text">
                {ratingValue.toFixed(0)}%
            </Text>
            </Flex>
        </Flex>
     );
}
 
export default Rating;