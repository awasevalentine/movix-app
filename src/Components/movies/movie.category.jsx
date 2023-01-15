import { Box, Flex } from "@chakra-ui/react";
import SectionTitle from "./title";

const MoviesCategory = () => {
    return ( 
        <Box w="100%">
            <Box margin={{base: '70px 22px 0px 22px', md: '70px 27px 0px 27px', lg:"70px 38px 0px 38px"}}>
                <SectionTitle title="featured"/>
            </Box>
        </Box>
     );
}
 
export default MoviesCategory;