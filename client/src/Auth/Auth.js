export const isAuthenticated = () => {
    console.log("check auth")
    if( typeof window == 'undefined')
        return false;
    if( localStorage.getItem('token') ){
        return JSON.parse(localStorage.getItem('token'));
    }
    else    
        return false;
}

export const isAdmin = () => {
    const {user, token} = JSON.parse(localStorage.getItem('token'));
    if( typeof window == 'undefined')
        return false;
    if( localStorage.getItem('token') ){
        return user.role==='ADMIN';
    }
    else    
        return false;
}