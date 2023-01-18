import { Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectUserID } from "../../features/auth/authSlice";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db, firebaseConfig, storage } from "../../firebase/firebaseConfig";
import { toast } from "react-toastify";
import { addDoc, collection, doc, documentId, getDoc, getDocs, setDoc } from "firebase/firestore";
import { useEffect } from "react";
import { redirect, useNavigate } from "react-router-dom";
import HeaderComponent from "../../Components/navbar/header/header";
import MoviesCategory from "../../Components/movies/movie.category";
import Footer from "../../Components/footer/footer";

const HomePage = () => {

    const {isLoggedIn } = useSelector(selectIsLoggedIn)
    const {userID } = useSelector((state)=>state.auth)
    const navigate = useNavigate()
    const usersCollectionRef = collection(db, "users");


    // useEffect(()=>{
    //     console.log("User id: ", userID)
    //     const docRef = doc(db, 'users', userID)
    //     getDoc(docRef).then((doc)=>{
    //         console.log("Here1111: ", doc.data(), doc.id)
    //     })
    //     const getUsers = async () => {
    //         // const docRef = doc(db, 'users')
    //         const data = await getDocs(usersCollectionRef)
    //         console.log("Here: ", data.docs.map((doc)=>({
    //             ...doc.data(),id: doc.id
    //         })))

    //         // setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

    //       };
      
    //     //   getUsers();

    // })
    return ( 
        <>
            <HeaderComponent />
            <MoviesCategory />
            <Footer />
        </>
     );
}
 
export default HomePage;