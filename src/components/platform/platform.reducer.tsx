import { initialState } from "./platform.state.initial";
import { constants } from "../../reducers/constants"
import { stateReducer } from "../../reducers/reducers/reducer.state";
import { Platform } from "./platform.interface";
import { initialErrorMessage } from '../../assets/error/errorMessage.initial';

export const platformReducer = (state: stateReducer<Platform> = initialState, action: any ): stateReducer<Platform> => {
    switch (action.type) {
        case constants.CREATE_START+"platform":
            return { ...state, error: null, loading: true }
        case constants.CREATE_SUCCESS+"platform":
            return { ...state, error: [initialErrorMessage], loading: false, itens: [...state.itens as Platform[], action.payload as Platform], item: action.payload as Platform }
        case constants.CREATE_ERROR+"platform":
            return { ...state, error: action.payload, loading: false }

        case constants.RETRIEVE_ALL_START+"platform":
            return { ...state, error: null, loading: true }
        case constants.RETRIEVE_ALL_SUCCESS+"platform":
            return { ...state, error: null, loading: false, itens: action.payload as Platform[] }
        case constants.RETRIEVE_ALL_ERROR+"platform":
            return { ...state, error: action.payload, loading: false }

        // case constants.RETRIEVE_START+"platform":
        //     return { ...state, error: null, loading: true }
        // case constants.RETRIEVE_SUCCESS+"platform":
        //     return { ...state, error: null, loading: false, itens: [...state.itens], item: action.payload }
        // case constants.RETRIEVE_ERROR+"platform":
        //     return { ...state, error: action.payload, loading: false, itens: [], item: {} }

        case constants.UPDATE_START+"platform":
            return { ...state, error: null, loading: true }
        case constants.UPDATE_SUCCESS+"platform":
            return { ...state, error: [initialErrorMessage], loading: false, itens: [...state.itens.filter(item => item.id !== action.payload.id), action.payload], item: action.payload }
        case constants.UPDATE_ERROR+"platform":
            return { ...state, error: action.payload, loading: false }

        case constants.DELETE_START+"platform":
            return { ...state, error: null, loading: true }
        case constants.DELETE_SUCCESS+"platform":
            return { ...state, error: [initialErrorMessage], loading: false, itens: state.itens.filter(item => item.id !== action.payload.id) }
        case constants.DELETE_ERROR+"platform":
            return { ...state, error: action.payload, loading: false }

        // case constants.DELETE_ALL_START+"platform":
        //     return { ...state, error: null, loading: true }
        // case constants.DELETE_ALL_SUCCESS+"platform":
        //     return { ...state, error: [initialErrorMessage], loading: false, itens: state.itens }
        // case constants.DELETE_ALL_ERROR+"platform":
        //     return { ...state, error: action.payload, loading: false }

        default:
            return state
    }
}