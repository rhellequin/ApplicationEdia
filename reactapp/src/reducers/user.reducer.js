export default function (user={}, action){
    console.log('user')
    console.log(action)
    if (action.type == 'login'){
        console.log(action.token,'jesuisreduceur')
        return {token: action.token, firstName: action.firstName};
    } else if(action.type=='disconnect'){
        
        return{}
    }

    else {
        console.log('error')
        return user
    }
}