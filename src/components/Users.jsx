import axios from "axios";
import { url } from "../url";
import React,{ useState , useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { Button } from "./Button"

export const Users = () => {

    
    const [users, setUsers] = useState([]);
    const [filterUser,setFilterUser] = useState("")

    useEffect(() => {
        
        axios.get(`${url}/api/v1/user/bulk?filter=`+filterUser).then(response => {
            setUsers(response.data.user);
        })
        
    }, [filterUser]);

    // Replace with backend call
    

    return <>
        <div className="font-bold mt-6 text-lg">
            Users
        </div>
        <div className="my-2">
            <input onChange={(e)=>{setFilterUser(e.target.value)}} type="text" placeholder="Search users..." className="w-full px-2 py-1 border rounded border-slate-200"></input>
        </div>
        <div>
            {users.map(user => <User user={user} />)}
        </div>
    </>
}

function User({user}) {
    const navigate = useNavigate();
    return <div className="flex justify-between">
        <div className="flex">
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl">
                    {user.firstName[0]}
                </div>
            </div>
            <div className="flex flex-col justify-center h-ful">
                <div>
                    {user.firstName} {user.lastName}
                </div>
            </div>
        </div>

        <div className="flex flex-col justify-center h-ful">
            <Button onClick={()=>{
                navigate("/send?id="+user._id+"&name="+user.firstName)
            }} label={"Send Money"} />
        </div>
    </div>
}