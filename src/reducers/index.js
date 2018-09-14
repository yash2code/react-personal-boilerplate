import { CONSTANT } from '../constants'

const performAction = (state = { val : 'value' }, action) => {

    switch(action.type) {
        
        case CONSTANT:
            console.log('state: ',state,' action ', action);
            let val = state.val
            return { val }
        
        default:
            return state
    }
}

export default performAction