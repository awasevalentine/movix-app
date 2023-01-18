import { Box, Flex } from "@chakra-ui/react";
import SectionTitle from "./title";
import MovieList from "./movies.list";
import ExclusiveMovies from "./exclusive-movies";
import FeaturedCast from "./featured-cast";

const MoviesCategory = () => {
    return ( 
        <Box w="100%">
            <MovieList />
            <MovieList />
            <MovieList />
            <ExclusiveMovies />
            <FeaturedCast />
        </Box>
     );
}
 
export default MoviesCategory;