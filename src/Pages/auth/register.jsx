import { Link, useNavigate } from "react-router-dom";
import "./auth.style.css"
import { Box, Button, Flex, FormControl, Heading, Image, Input, InputGroup, InputRightElement, Progress, Text } from "@chakra-ui/react";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";
import { toast } from "react-toastify";

const Register = () => {
    const [userData, setUSerData ] = useState({
        name: "",
        email: "",
        password: ""
    })
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    const textChange = (e) => {
        setUSerData((prevData)=> ({
            ...prevData, 
            [e.target.id] : e.target.value
        }))
    }

    const { name, email, password } = userData
   
    const handleSubmit = (e) =>{
        e.preventDefault()
        setIsLoading(true);
        console.log("Here is the data: ", userData)
        createUserWithEmailAndPassword(auth, email, password, name)
          .then((userCredential) => {
            const user = userCredential.user;
            setIsLoading(false);
            toast.success("Registration Successful...");
            navigate("/sign-in");
          })
          .catch((error) => {
            toast.error(error.message);
            setIsLoading(false);
          });

    }
    return ( 
        <Flex className="main_wrapper" h="100%" direction="column"
        justifyContent={{base: 'center', md: 'normal'}} alignItems="center"
        >
            <Flex className="content_wrapper" direction="column"
            gap={{base:"17px", md:"24px"}} padding={{base: "10px", md: "48px 28px 36px" }} w={{base: "100%", md:"450px"}}
            >
            <Flex className="logo" h={{md: "88px"}} w={{base: "100%", md:"88px"}} justifyContent="center" >
                <Image src={require("../../asset/account_creation/auth_logo.png")}
                    alt="Authentication Logo" h={{base: "40px", md:"73.33px"}} w={{base: "40px", md:"73.33px"}}
                />
            </Flex>
            <Flex className="form_wrapper" direction="column" w={{base: "100%", md:"394px"}}
                h={{base: "100%", md: "408px"}}
            >
                <Flex className="text_header" direction="column" w={{base: "100%", md: "394px"}}
                h={{base: "50px", md: "66px"}}
                >
                    <Heading className="welcome_header" w={{base: "100%", md: "112px"}}
                    h={{base: "13px", md: "23px"}} lineHeight={{base: "17px", md:"23px"}}
                    fontSize={{base: "13px", md: "18px"}} fontWeight={{base: 600, md: 700}}
                    >
                        Hi, Welcome
                    </Heading>
                    <Heading className="welcome_sub_header" w={{base: "100%", md: "394px"}}
                    lineHeight={{base: "15px", md: "18px"}} fontSize={{base: "11px", md:"14px"}}
                    >
                        Please sign-in to your account and start your experience
                    </Heading>
                </Flex>
                <Flex className="form_fields_wrapper" w={{base: "100%", md: "394px"}}
                    h={{base: "100%", md: "342px"}} gap={{base: "20px", md: "32px"}} direction="column"
                >
                    <Flex className="form_input_fields" direction="column" w={{base: "100%", md: "394px"}}
                       gap={{base: "10px", md: "16px"}}
                    >
                        <FormControl w={{base: "100%", md: "394px"}} h={{base: "40px", md:"51px"}} padding="0px 12px">
                            <Input type="text" class="form-control" id="name" placeholder="Full Name"
                            onChange={(e) => textChange(e)}
                            />
                        </FormControl>
                        <FormControl w={{base: "100%", md: "394px"}} h={{base: "40px", md:"51px"}} padding="0px 12px">
                            <Input type="email" class="form-control" id="email" placeholder="Email"
                            onChange={(e) => textChange(e)}
                            />
                        </FormControl>
                        <FormControl w={{base: "100%", md: "394px"}} h={{base: "40px", md:"51px"}} padding="0px 12px">
                        <InputGroup style={{display: 'flex', justifyContent: 'center'}}>
                            <Input
                                type={show ? 'text' : 'password'}
                                placeholder='Password' id="password"
                                onChange={(e) => textChange(e)}
                            />
                            <InputRightElement width="20%" >
                                <span h='1.75rem' onClick={handleClick}>
                                {
                                show ? 
                                <span class="material-icons" style={{cursor: 'pointer'}}>visibility</span> 
                                : 
                                <span class="material-icons"style={{cursor: 'pointer'}}>visibility_off</span>
                                }
                                </span>
                            </InputRightElement>
                        </InputGroup>
                        </FormControl>
                        <Progress size='xs' marginLeft="13px" marginTop="-30px" isIndeterminate />
                    </Flex>
                    <Flex className="btn_wrapper" direction="column" w={{base: "100%", md:"394px"}} h={{base: "40px", md:"51px"}}>
                        <Button type="submit" class="register_btn" fontSize={{base: "12px", md:"15px"}}
                        lineHeight={{base: "18px", md: "26px"}}
                         onClick={(e)=> handleSubmit(e)}
                        >Register</Button>
                  
                    </Flex>
                    <Flex className="account_exist" w={{base: "100%", md: "245px"}} h={{base: "25px", md: "39px"}}
                    gap={{base: "5", md: "10px"}} padding={{base: "5px", md: "10px"}}
                    >
                        <Text className="already_have_account" w={{base: "60%", md: "178px"}}
                        fontSize={{base: "12px", md: "14px"}} lineHeight={{base: "18px", md: "18px"}}
                        >Already have an account?</Text>
                        <Link to="/sign-in" className="have_acct_login" w={{base: "30%", md: "37px"}}
                        >Login</Link>
                    </Flex>
                </Flex>
            </Flex>
            </Flex>
        </Flex>
     );
}
 
export default Register;