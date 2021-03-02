import { ADD, SUB } from './actionType'

export const add = n => ({
  type: ADD,
  payload: {
    n
  }
})

export const sub = n => ({
  type: SUB,
  payload: {
    n: 1
  }
})
