import React from "react";
import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, 
        DrawerHeader, DrawerOverlay, Image, Input, useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";


const MenuItem = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    
return (
        <>
        
        <Image src={require('../../../asset/header/navbar/Menu.png')} cursor="pointer" 
            ref={btnRef} colorScheme='teal' onClick={onOpen}  color="#FFFFFF" h="36px" w="36px" />
        <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
            finalFocusRef={btnRef}
        >
            <DrawerOverlay />
            <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Create your account</DrawerHeader>
    
            <DrawerBody>
                <Input placeholder='Type here...' />
            </DrawerBody>
    
            <DrawerFooter>
                <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
                </Button>
                <Button colorScheme='blue'>Save</Button>
            </DrawerFooter>
            </DrawerContent>
        </Drawer>
        </>
    )
}
 
export default MenuItem;