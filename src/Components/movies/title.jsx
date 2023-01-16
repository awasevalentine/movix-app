import { Box, Container, Flex, Image, Spacer, Text } from "@chakra-ui/react";
import {BiChevronRight} from 'react-icons/bi'
import "./movies.style.css"
import Items from "./items";


const SectionTitle = ({title}) => {
    return ( 
        <Flex w="100%" justifyContent="center">
        <Flex direction="row" justifyContent="space-between" w={{base: "calc(100% - 40px)", md:"calc(100% - 70px)", lg:"calc(100% - 196px)"}} marginTop="70px">
            <Flex justifyContent="start" alignItems="flex-start" marginLeft={{base:'0px', md:'12px', lg:"16px"}}>
                <Text className="section_title">{title}</Text>
            </Flex>
            <Flex  direction="row"  marginTop="12px" order="1" marginRight={{base:'0px', md:'12px', lg:"16px"}}>
                <Text className="section_see_all" cursor="pointer" >See More 
                <BiChevronRight /></Text>
            </Flex>
        </Flex>
        </Flex>
     );
}
 
export default SectionTitle;