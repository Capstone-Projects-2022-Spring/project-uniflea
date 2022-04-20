import { Auth, DataStore } from "aws-amplify"
import { useContext } from "react"
import AuthContext from "../contexts/Authentication"
import { User } from "../models";

const GetSchool =   () => {
    // const myUser = await Auth.currentAuthenticatedUser();

    // const user = await DataStore.query(User, (s) => s.userSub("eq", myUser.attributes.sub));
    // const school = user[0].university;

    const {user, setUser} = useContext(AuthContext);

    // console.log("current school: " +school)

    if(!user){
        console.log("user is: " + user);
        return true;
    }
    if(user.attributes['custom:University'] == 'Temple'){
        return true;
    }
    else{
        return false;
    }
}

export default GetSchool;