import { initialState } from "./user.state.initial";
import { constants } from "../../assets/types/constants"
import { stateReducer } from "../reducer.state";
import { User } from "../../components/user/user.interface";
import { initialErrorMessage } from "../../actions/type/errorMessage.initial";

export const userReducer = (state: stateReducer<User> = initialState, action: any ): stateReducer<User> => {
    switch (action.type) {
        case constants.CREATE_START+"user":
            return { ...state, error: null, loading: true }
        case constants.CREATE_SUCCESS+"user":
            return { ...state, error: [initialErrorMessage], loading: false, itens: [...state.itens as User[], action.payload as User], item: action.payload as User }
        case constants.CREATE_ERROR+"user":
            return { ...state, error: action.payload, loading: false }

        case constants.RETRIEVE_ALL_START+"user":
            return { ...state, error: null, loading: true }
        case constants.RETRIEVE_ALL_SUCCESS+"user":
            return { ...state, error: null, loading: false, itens: action.payload as User[] }
        case constants.RETRIEVE_ALL_ERROR+"user":
            return { ...state, error: action.payload, loading: false }

        // case constants.RETRIEVE_START+"user":
        //     return { ...state, error: null, loading: true }
        // case constants.RETRIEVE_SUCCESS+"user":
        //     return { ...state, error: null, loading: false, itens: [...state.itens], item: action.payload }
        // case constants.RETRIEVE_ERROR+"user":
        //     return { ...state, error: action.payload, loading: false, itens: [], item: {} }

        case constants.UPDATE_START+"user":
            return { ...state, error: null, loading: true }
        case constants.UPDATE_SUCCESS+"user":
            return { ...state, error: [initialErrorMessage], loading: false, itens: [...state.itens.filter(item => item.id !== action.payload.id), action.payload], item: action.payload }
        case constants.UPDATE_ERROR+"user":
            return { ...state, error: action.payload, loading: false }

        case constants.DELETE_START+"user":
            return { ...state, error: null, loading: true }
        case constants.DELETE_SUCCESS+"user":
            return { ...state, error: [initialErrorMessage], loading: false, itens: state.itens.filter(item => item.id !== action.payload.id) }
        case constants.DELETE_ERROR+"user":
            return { ...state, error: action.payload, loading: false }

        // case constants.DELETE_ALL_START+"user":
        //     return { ...state, error: null, loading: true }
        // case constants.DELETE_ALL_SUCCESS+"user":
        //     return { ...state, error: [initialErrorMessage], loading: false, itens: state.itens }
        // case constants.DELETE_ALL_ERROR+"user":
        //     return { ...state, error: action.payload, loading: false }

        default:
            return state
    }
}