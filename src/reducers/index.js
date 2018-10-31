import { CONSTANT } from '../constants'

//reducer for redux
const performAction = (state = { val : 'value' }, action) => {

    switch(action.type) {   //check type of action performed
        
        case CONSTANT:
            console.log('state: ',state,' action ', action);
            let val = state.val
            return { val }     // return the value to change
        
        default:
            return state     
    }
}

export default performAction