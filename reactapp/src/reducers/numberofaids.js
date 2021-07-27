export default function(numberOfAids = 0, action){

    
        if(action.type == 'updateNumberOfAids'){
            return action.numberOfAids;
        } else {
            return numberOfAids;
        }
    
    
        
    }