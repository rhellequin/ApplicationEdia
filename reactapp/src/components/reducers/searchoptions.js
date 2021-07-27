export default function(searchOptions = [], action){

    if(action.type == 'updateSearch'){
        return action.searchOptions;
    } else {
        return searchOptions;
    }



    
}