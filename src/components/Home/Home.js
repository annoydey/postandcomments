import React, { useState, useEffect } from 'react';
import Posts from '../posts/Posts';

 
const Home = () => {
    const [user,userpost] = useState([]);

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => userpost(data))
    },[])

    return (
        <div>
            {
                user.map(userspost => <Posts userspost={userspost}></Posts>)
            }
        </div>
    );
};

export default Home;