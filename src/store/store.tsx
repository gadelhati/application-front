import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { reducers } from "../reducers/index"

const initialState = {}

const middelware = [thunk]

export const store = createStore(
    reducers,
    initialState,
    applyMiddleware(...middelware),
)