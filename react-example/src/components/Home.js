import React from 'react';
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div>
            <Link to={'/'}>홈으로</Link><br/>
            <Link to={'/users'}>유저페이지로</Link><br/>
            <Link to={'/todos'}>홈으로</Link>
        </div>
    )
};

export default Home;
