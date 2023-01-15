import { Box, Text } from "@chakra-ui/react";
import "./description.style.css"

const Description = ({text}) => {
    return ( 
        <Box marginTop="16px">
        <Text className="description_text" >
            John Wick is on the run after killing a member of the international assassins' guild,
            and with a $14 million price tag on his head, he is the target of hit men and women 
            everywhere.
        </Text>
        </Box>
     );
}
 
export default Description;