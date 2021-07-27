export default function(indexOptions = 0, action){

    
        if(action.type === 'updateIndexOptions'){
            return action.indexOptions;
        } else {
            return indexOptions;
        }
    
    
        
    }