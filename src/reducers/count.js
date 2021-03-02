import { ADD, SUB } from '../actions/actionType'

const count = 0
export default (state = count, action) => {
  switch (action.type) {
    case ADD:
      return state + action.payload.n
    case SUB:
      return state - action.payload.n
    default:
      return state
  }
}
