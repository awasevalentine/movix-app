import { Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase/firebaseConfig";
import "./navbar.menu.style.css"
import MenuItem from "./navbar.menu.item";

const NavBarMenu = () => {
    const {userID } = useSelector((state)=>state.auth)
    const [userName, setUserName] = useState("");

    useEffect(()=>{
        console.log("User: ", userID)
        const getUser = ()=>{
            const docRef = doc(db, 'users', userID )
            getDoc(docRef).then((res)=>{
                const getFirstName = res.data().FullName
                setUserName(getFirstName.split(" ")[0])
            })
        }
        getUser()
    },[])

    return ( 
        <Flex direction="row" alignItems="center" gap={{base:'10px', md:'18px', lg:"27px"}}
        h={{base:'26px', md:'30px', lg:"36px"}} w={{base:'100%',md:'130px', xl:"166px"}}
        >
            <Text className="username" display={{base: 'none', md:'flex'}}
            >{userName}</Text>
            <MenuItem />

        </Flex>

     );
}
 
export default NavBarMenu;