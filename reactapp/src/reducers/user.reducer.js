export default function (user={}, action){
    if (action.user === 'connection'){
        return action.user;
    } else {
        return user
    }
}