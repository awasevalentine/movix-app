import { Search2Icon } from "@chakra-ui/icons";
import { Box, Flex, FormControl, Input, InputGroup, InputLeftElement, InputRightElement } from "@chakra-ui/react";
import "./search.style.css"
const SearchBar = () => {

    const handleChange = (e) => {
        console.log("Text: ", e.target.value)
    }
    return ( 
        <>
        <InputGroup w={{base:'250px', md:'400px', xl:"525px"}} h={{base:'26px', md:'30px',xl:"36px"}} borderRadius="6px"
        top="22px" left={{base:'100px', md:'200px', lg:'350px', xl:"493px"}}
        className="search_input_field"
        
        >
        <Input
            type="text"
            // value={value}
            onChange={handleChange} _focusVisible={{outline: "none",}}
            padding="6px 10px" border="2px solid #D1D5DB" h="36px"
            placeholder="What do you want to watch?"
        />
        <InputRightElement children={<Search2Icon />} />
        </InputGroup>
        </>
     );
}
 
export default SearchBar;