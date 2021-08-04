export default function(filAriane = [], action){
 
    if(action.type == 'initFilAriane') {
        return [];
    } else if(action.type == 'updateFilAriane') {
        return [...action.filAriane]
    } else {
        return filAriane;
    }
}