export default function(searchOptions = [], action){


    if(action.type == 'updateSearchOptions'){
        return [...action.searchOptions];
    } else {
        return searchOptions;
    }


    
}