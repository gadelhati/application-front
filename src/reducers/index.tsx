import { combineReducers  } from "redux"
import { authReducer } from "./auth/auth.reducer"
import { omReducer } from "./om/om.reducer"
import { userReducer } from "./user/user.reducer"
import { observationReducer } from "./observation/observation.reducer"

export const reducers = combineReducers({ 
    auths: authReducer,
    oms: omReducer,
    users: userReducer,
    observations: observationReducer,
})

export type RootState = ReturnType<typeof reducers>
export type AppDispatch = typeof reducers