export const authHeader = ()=> {
    let user = JSON.parse(localStorage.getItem('user'));

    if (user && user.accessToken) {
        return { Authorization: `Bearer ${user.accessToken}`, 'Content-Type': 'application/json' };
    } else {
        return {};
    }
}