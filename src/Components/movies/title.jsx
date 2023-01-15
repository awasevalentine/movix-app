import { Box, Container, Flex, Image, Spacer, Text } from "@chakra-ui/react";
import {BiChevronRight} from 'react-icons/bi'
import "./movies.style.css"
import Carousel from "react-elastic-carousel";


const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

const SectionTitle = ({title}) => {
    return ( 
        <>
        <Flex flex="row" w="100%">
            <Flex justifyContent="start" alignItems="center" w="50%" marginLeft={{base:'0px', md:'12px', lg:"16px"}}>
                <Text className="section_title">{title}</Text>
            </Flex>
            <Flex  direction="row" justifyContent="end" alignItems="center" marginTop="12px" order="1" w="50%" marginRight={{base:'0px', md:'12px', lg:"16px"}}>
                <Text className="section_see_all" cursor="pointer" >See More 
                <BiChevronRight /></Text>
            </Flex>
        </Flex>
        <Carousel breakPoints={breakPoints}>
                <Image src={require('../../asset/account_creation/auth_logo.png')} />
                <Image src={require('../../asset/header/background-image/Poster.png')} />
                <Image src={require('../../asset/header/navbar/Menu.png')} />
                <Image src={require('../../asset/header/navbar/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@ 1.png')} />
                <Image src={require('../../asset/header/navbar/tv.png')} />
                <Image src={require('../../asset/header/navbar/PngItem_1381056 1.png')} />
                <Image src={require('../../asset/account_creation/auth_logo.png')} />
                <Image src={require('../../asset/header/background-image/Poster.png')} />
                <Image src={require('../../asset/header/navbar/Menu.png')} />
                <Image src={require('../../asset/header/navbar/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@ 1.png')} />
                <Image src={require('../../asset/header/navbar/tv.png')} />
                <Image src={require('../../asset/header/navbar/PngItem_1381056 1.png')} />
              </Carousel>
    </>
     );
}
 
export default SectionTitle;