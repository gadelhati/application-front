import { combineReducers  } from "redux"
import { authReducer } from "./auth/auth.reducer"
import { omReducer } from "./om/om.reducer"
import { userReducer } from "./user/user.reducer"
import { observationReducer } from "./observation/observation.reducer"
import { researcherReducer } from "./researcher/researcher.reducer"
import { platformReducer } from "./platform/platform.reducer"

export const reducers = combineReducers({ 
    auths: authReducer,
    oms: omReducer,
    users: userReducer,
    observations: observationReducer,
    researchers: researcherReducer,
    platforms: platformReducer,
})

export type RootState = ReturnType<typeof reducers>
export type AppDispatch = typeof reducers