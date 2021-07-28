export default function (user={}, action){
    if (action.type == 'login'){
        return {token: action.token, firstName: action.firstName};
    } else if(action.type=='disconnect'){
        return{}
    }

    
    else {  
        return user
    }
}