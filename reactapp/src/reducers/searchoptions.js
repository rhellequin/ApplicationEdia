export default function(searchOptions = [], action){
    if(action.type == 'initSearchOptions') {
        return action.searchOptions;
    } else if(action.type == 'updateSearchOptions') {
        searchOptions[action.index].valeur = action.valeur
        return searchOptions;
    } else {
        return searchOptions;
    }

    
}