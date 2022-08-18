import { combineReducers  } from "redux"
import { authReducer } from "../components/auth/auth.reducer"
import { omReducer } from "../components/om/om.reducer"
import { userReducer } from "../components/user/user.reducer"
import { observationReducer } from "../components/observation/observation.reducer"
import { researcherReducer } from "../components/researcher/researcher.reducer"
import { platformReducer } from "../components/platform/platform.reducer"
import { countryReducer } from "../components/country/country.reducer"
import { equipmentReducer } from "../components/equipment/equipment.reducer"
import { manufacturerReducer } from "../components/manufacturer/manufacturer.reducer"
import { institutionReducer } from "../components/institution/institution.reducer"

export const reducers = combineReducers({ 
    auths: authReducer,
    oms: omReducer,
    users: userReducer,
    observations: observationReducer,
    researchers: researcherReducer,
    platforms: platformReducer,
    countries: countryReducer,
    equipments: equipmentReducer,
    manufacturers: manufacturerReducer,
    institutions: institutionReducer,
    platformCategories: platformReducer,
})

export type RootState = ReturnType<typeof reducers>
export type AppDispatch = typeof reducers