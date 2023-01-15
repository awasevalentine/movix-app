import { doc, getDoc } from "firebase/firestore"
import { db } from "../firebase/firebaseConfig"
import { useSelector } from "react-redux"

export const FetchUSerName = () => {
    const {userID } = useSelector((state)=>state.auth)
    const docRef = doc(db, 'users', userID )

    return getDoc(docRef).then((res)=>{
        return res.data()
    })

    return{
        
    }
}