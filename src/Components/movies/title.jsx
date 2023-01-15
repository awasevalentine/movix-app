import { Box, Container, Flex, Spacer, Text } from "@chakra-ui/react";
import {BiChevronRight} from 'react-icons/bi'
import "./movies.style.css"

const SectionTitle = ({title}) => {
    return ( 
        <Flex flex="row" w="100%">
            <Flex justifyContent="start" alignItems="center" w="50%" marginLeft="16px">
                <Text className="section_title">{title}</Text>
            </Flex>
            <Flex  direction="row" justifyContent="end" alignItems="center" marginTop="12px" order="1" w="50%" marginRight="16px">
                <Text className="section_see_all" cursor="pointer" >See More 
                <BiChevronRight /></Text>
            </Flex>
        </Flex>
     );
}
 
export default SectionTitle;