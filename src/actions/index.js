import { CONSTANT } from '../constants'


//define actions here for redux
export const changeState = (val) => {
    const action = {
        type: 'CONSTANT',
        val
    }
    return action
}