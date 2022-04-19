import { Auth, DataStore } from "aws-amplify"
import { useContext } from "react"
import AuthContext from "../contexts/Authentication"
import { User } from "../models";

const GetSchool =  async () => {
    const myUser = await Auth.currentAuthenticatedUser();

    const user = await DataStore.query(User, (s) => s.userSub("eq", myUser.attributes.sub));
    const school = user[0].university;

    // console.log("current school: " +school)

    if(school === 'Temple'){
        return 'Temple';
    }
    else{
        return 'Drexel';
    }
}

export default GetSchool;