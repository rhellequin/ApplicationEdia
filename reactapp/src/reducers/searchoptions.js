export default function(searchOptions = [], action){
    console.log('Appel reducer  searchOptions :',  action)
    if(action.type == 'initSearchOptions') {
        console.log('dans initSearchOptions :',  action.searchOptions)
        return action.searchOptions;
    } else if(action.type == 'updateSearchOptions') {
        searchOptions[action.index].valeur = action.valeur
        return searchOptions;
    } else {
        return searchOptions;
    }

    
}