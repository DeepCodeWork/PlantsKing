import React from 'react';

const Layout = ({ title = '', desciption = '', children, classname }) => {
    return(
        <div>
            <div className="jumbotron">
                <h2>{title}</h2>
                <p className="lead">{desciption}</p>
            </div>
            <div className={classname}>
                {process.env.REACT_APP_API_URL}
            </div>
        </div>
    )
}

export default Layout;