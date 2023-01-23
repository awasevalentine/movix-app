import { Search2Icon } from "@chakra-ui/icons";
import { Box, Flex, FormControl, Input, InputGroup, InputLeftElement, InputRightElement } from "@chakra-ui/react";
import "./search.style.css"
const SearchBar = () => {

    const handleChange = (e) => {
        console.log("Text: ", e.target.value)
    }
    return ( 
        <Flex gap="10px" margin={{base: '0px 20px 10px 20px', md: '22px 0px, 0px, 0px'}}>
        <InputGroup w={{base:'100%', md:'400px', xl:"525px"}} h={{base:'26px', md:'30px',xl:"36px"}} borderRadius="6px"
        className="search_input_field"
        >
        <Input
            type="text"
            // value={value}
            onChange={handleChange} _focusVisible={{outline: "none",}}
            padding="6px 10px" backgroundColor="gainsboro" h={{base: '26px', md:"36px"}}
            placeholder="What do you want to watch?"
        />
        <InputRightElement>
        <Search2Icon color="#b31717" marginTop={{base: "-10px", md: '0px'}} />
        </InputRightElement>
        </InputGroup>
        </Flex>
     );
}
 
export default SearchBar;