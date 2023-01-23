import { Box, Flex } from "@chakra-ui/react";
import SectionTitle from "./title";
import MovieList from "./movies.list";
import ExclusiveMovies from "./exclusive-movies";
import FeaturedCast from "./featured-cast";
import { useEffect, useState } from "react";
import getMovie from '../../api/urlCall'


const MoviesCategory = () => {
    const [featuredMovies, setFeaturedMovies ] = useState([])
    const [newArrivalMovies, setNewArrivalMovies ] = useState([])
    const [exclusiveVideos, setExclusiveVideos ] = useState([])
    const [featuredCast, setFeaturedCast ] = useState([])

    useEffect(() => {
        const fetchMovies = async()=>{
            const {data: trendingMoviesData} = await getMovie.get("trending/all/day")
            const {data: newArrivalData} = await getMovie.get("tv/popular")
            const {data: exclusiveData} = await getMovie.get("tv/popular")
            const {data: exclusiveData2} = await getMovie.get("movie/18")
            const {data: featuredCastData} = await getMovie.get("person/popular")
            console.log("Cheheh ooooooo: ",trendingMoviesData )
            if(trendingMoviesData.results){
                setFeaturedMovies(trendingMoviesData.results)
            }
            if(newArrivalData.results){
                setNewArrivalMovies(newArrivalData.results)
            }
            if(exclusiveData.results){
                setExclusiveVideos(exclusiveData.results)
            }
            if(featuredCastData.results){
                setFeaturedCast(featuredCastData.results)
            }
        }
        fetchMovies()
        // console.log("Inside another: ", movies)
      }, []);

    return ( 
        <Box w="100%">
            {/*This is for Featured movies section */}
            <MovieList params={featuredMovies} title="Trending" /> 
            {/* This is for New Arrival Section */}
            <MovieList params={newArrivalMovies} title="Popular Movies" /> 
            {/* This for Exclusive Videos */}
            <ExclusiveMovies params={exclusiveVideos} title="Exclusive Videos" />
            {/* This is for featured cast */}
            <FeaturedCast params={featuredCast} title="Featured Casts" />
        </Box>
     );
}
 
export default MoviesCategory;