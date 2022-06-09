import decode from 'jwt-decode';

class AuthToken{

    tokenExpired(token){
        try{
            const decodedToken = decode(token);
            if(decodedToken * 1000 < Date.now()){
                return true;
            }
            else{
            return false;
            }
        }
        catch(err) {
            return false;
        }
    }

    getToken(){
        return localStorage.getItem('id_token');
    }

    login(idToken){
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');
    }

    logout(){
    // Clear user token and profile data from localStorage
    localStorage.removeItem('id_token');
    window.location.assign('/');
    }
}

export default new AuthToken();