export default function(aids = [], action){
 
    if(action.type == 'initAids') {
        return [];
    } else if(action.type == 'updateAids') {
        console.log(action.aids,'aidesreducer')
        return [...action.aids]
    } else {
        return aids;
    }
}