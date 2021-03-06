import axios from 'axios';
import jwt from 'jsonwebtoken';

import RootApiUrl from './RootApiUrl';

const login = (user) => {
    return new Promise((resolve, reject) => {
        axios.post(`${RootApiUrl}/login`, user)
            .then((response) => {
                const userDetails = {
                    username: user.username
                };

                localStorage.setItem('user', createToken(userDetails));
                refreshPage();
                resolve("Everything worked!");
            })
            .catch((error) => {
                reject(Error("Invalid credentials"));
            });
    })
};

const logout = () => {
    destroyToken('user');  
    browserHistory.push('/');
    refreshPage();
};

const isLoggedIn = () => {
    if (localStorage.getItem('user')) {
        return true;
    } else {
        return false
    }
};

const getUserDetails = () => {
    let token = jwt.decode(localStorage.getItem('user'));
    if (token) {
        return token.data;
    } else {
        return 'No user data';
    }

};

const destroyToken = (token) => {
    localStorage.removeItem(token);
};

const refreshPage = () => {
    window.location.reload();
};

const createToken = (data) => {
    let token = jwt.sign({
        data
    }, 'secret', {expiresIn: '1h'});

    return token;

};

module.exports = {
    login,
    logout,
    isLoggedIn,
    getUserDetails
};