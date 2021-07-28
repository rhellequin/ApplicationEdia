export default function(aids = [], action){
 
    if(action.type == 'initAids') {
        return [];
    } else if(action.type == 'updateAids') {
        return [...action.aids]
    } else {
        return aids;
    }
}