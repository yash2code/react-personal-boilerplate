import { CONSTANT } from '../constants'

export const changeState = (val) => {
    const action = {
        type: 'CONSTANT',
        val
    }
    return action
}