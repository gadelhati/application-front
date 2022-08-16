import { initialState } from "./institution.state.initial";
import { constants } from "../../reducers/constants"
import { stateReducer } from "../../reducers/reducers/reducer.state";
import { Institution } from "./institution.interface";
import { initialErrorMessage } from '../../assets/error/errorMessage.initial';

export const institutionReducer = (state: stateReducer<Institution> = initialState, action: any ): stateReducer<Institution> => {
    switch (action.type) {
        case constants.CREATE_START+"institution":
            return { ...state, error: null, loading: true }
        case constants.CREATE_SUCCESS+"institution":
            return { ...state, error: [initialErrorMessage], loading: false, itens: [...state.itens as Institution[], action.payload as Institution], item: action.payload as Institution }
        case constants.CREATE_ERROR+"institution":
            return { ...state, error: action.payload, loading: false }

        case constants.RETRIEVE_ALL_START+"institution":
            return { ...state, error: null, loading: true }
        case constants.RETRIEVE_ALL_SUCCESS+"institution":
            return { ...state, error: null, loading: false, itens: action.payload as Institution[] }
        case constants.RETRIEVE_ALL_ERROR+"institution":
            return { ...state, error: action.payload, loading: false }

        // case constants.RETRIEVE_START+"institution":
        //     return { ...state, error: null, loading: true }
        // case constants.RETRIEVE_SUCCESS+"institution":
        //     return { ...state, error: null, loading: false, itens: [...state.itens], item: action.payload }
        // case constants.RETRIEVE_ERROR+"institution":
        //     return { ...state, error: action.payload, loading: false, itens: [], item: {} }

        case constants.UPDATE_START+"institution":
            return { ...state, error: null, loading: true }
        case constants.UPDATE_SUCCESS+"institution":
            return { ...state, error: [initialErrorMessage], loading: false, itens: [...state.itens.filter(item => item.id !== action.payload.id), action.payload], item: action.payload }
        case constants.UPDATE_ERROR+"institution":
            return { ...state, error: action.payload, loading: false }

        case constants.DELETE_START+"institution":
            return { ...state, error: null, loading: true }
        case constants.DELETE_SUCCESS+"institution":
            return { ...state, error: [initialErrorMessage], loading: false, itens: state.itens.filter(item => item.id !== action.payload.id) }
        case constants.DELETE_ERROR+"institution":
            return { ...state, error: action.payload, loading: false }

        // case constants.DELETE_ALL_START+"institution":
        //     return { ...state, error: null, loading: true }
        // case constants.DELETE_ALL_SUCCESS+"institution":
        //     return { ...state, error: [initialErrorMessage], loading: false, itens: state.itens }
        // case constants.DELETE_ALL_ERROR+"institution":
        //     return { ...state, error: action.payload, loading: false }

        default:
            return state
    }
}