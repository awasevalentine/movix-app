import { Search2Icon } from "@chakra-ui/icons";
import { Box, Flex, FormControl, Input, InputGroup, InputLeftElement, InputRightElement } from "@chakra-ui/react";
import "./search.style.css"
const SearchBar = () => {

    const handleChange = (e) => {
        console.log("Text: ", e.target.value)
    }
    return ( 
        <>
        <InputGroup w="525px" h="36px" borderRadius="6px"
        top="22px" left="493px" gap="10px"
        className="search_input_field"
        
        >
        <Input
            type="text"
            // value={value}
            onChange={handleChange}
            padding="6px 10px" border="2px solid #D1D5DB"
            placeholder="What do you want to watch?"
        />
        <InputRightElement children={<Search2Icon />} />
        </InputGroup>
        </>
     );
}
 
export default SearchBar;