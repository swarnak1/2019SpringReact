import React from 'react';
import { Globals } from "../models/api";
import { GetFriends } from "../models/users.js";

export default ()=>{
    const [friends, setFriends] = React.useState([]);

    React.useEffect(()=>{
        GetFriends().then(setFriends)
    }, [])
    return (
        <div>

            {Globals.user && <h1>{Globals.user.name} Friends Page</h1>}
            <ul>
                {friends.map(friend=> 
                    <li key={friend.id}>
                        {friend.FirstName} {friend.LastName}
                    </li>
                )}
            </ul>
        </div>

    )
}
