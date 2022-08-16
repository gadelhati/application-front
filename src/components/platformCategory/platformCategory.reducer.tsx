import { initialState } from "./platformCategory.state.initial";
import { constants } from "../../reducers/constants"
import { stateReducer } from "../../reducers/reducers/reducer.state";
import { PlatformCategory } from "./platformCategory.interface";
import { initialErrorMessage } from '../../assets/error/errorMessage.initial';

export const platformCategoryReducer = (state: stateReducer<PlatformCategory> = initialState, action: any ): stateReducer<PlatformCategory> => {
    switch (action.type) {
        case constants.CREATE_START+"platformCategory":
            return { ...state, error: null, loading: true }
        case constants.CREATE_SUCCESS+"platformCategory":
            return { ...state, error: [initialErrorMessage], loading: false, itens: [...state.itens as PlatformCategory[], action.payload as PlatformCategory], item: action.payload as PlatformCategory }
        case constants.CREATE_ERROR+"platformCategory":
            return { ...state, error: action.payload, loading: false }

        case constants.RETRIEVE_ALL_START+"platformCategory":
            return { ...state, error: null, loading: true }
        case constants.RETRIEVE_ALL_SUCCESS+"platformCategory":
            return { ...state, error: null, loading: false, itens: action.payload as PlatformCategory[] }
        case constants.RETRIEVE_ALL_ERROR+"platformCategory":
            return { ...state, error: action.payload, loading: false }

        // case constants.RETRIEVE_START+"platformCategory":
        //     return { ...state, error: null, loading: true }
        // case constants.RETRIEVE_SUCCESS+"platformCategory":
        //     return { ...state, error: null, loading: false, itens: [...state.itens], item: action.payload }
        // case constants.RETRIEVE_ERROR+"platformCategory":
        //     return { ...state, error: action.payload, loading: false, itens: [], item: {} }

        case constants.UPDATE_START+"platformCategory":
            return { ...state, error: null, loading: true }
        case constants.UPDATE_SUCCESS+"platformCategory":
            return { ...state, error: [initialErrorMessage], loading: false, itens: [...state.itens.filter(item => item.id !== action.payload.id), action.payload], item: action.payload }
        case constants.UPDATE_ERROR+"platformCategory":
            return { ...state, error: action.payload, loading: false }

        case constants.DELETE_START+"platformCategory":
            return { ...state, error: null, loading: true }
        case constants.DELETE_SUCCESS+"platformCategory":
            return { ...state, error: [initialErrorMessage], loading: false, itens: state.itens.filter(item => item.id !== action.payload.id) }
        case constants.DELETE_ERROR+"platformCategory":
            return { ...state, error: action.payload, loading: false }

        // case constants.DELETE_ALL_START+"platformCategory":
        //     return { ...state, error: null, loading: true }
        // case constants.DELETE_ALL_SUCCESS+"platformCategory":
        //     return { ...state, error: [initialErrorMessage], loading: false, itens: state.itens }
        // case constants.DELETE_ALL_ERROR+"platformCategory":
        //     return { ...state, error: action.payload, loading: false }

        default:
            return state
    }
}