import React from 'react';
import Layout from '../Layout/Layout';

const Home = () => {
    return(
        <div>
            <Layout title="Title" desciption="This is the description" />
            {process.env.REACT_APP_BACKEND_URI}
        </div>
    )
}

export default Home;