import { Box, Flex } from "@chakra-ui/react";
import SectionTitle from "./title";
import MovieList from "./movies.list";

const MoviesCategory = () => {
    return ( 
        <Box w="100%">
            <MovieList />
            <MovieList />
            <MovieList />
        </Box>
     );
}
 
export default MoviesCategory;