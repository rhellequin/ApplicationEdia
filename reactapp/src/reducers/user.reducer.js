export default function (user={}, action){
    console.log('user')
    if (action.type == 'login'){
        console.log(user,'jesuisreduceur')
        return action.user;
    } else {
        return user
    }
}