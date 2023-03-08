import { constants } from "../../reducers/constants"
import { stateReducer } from "../../reducers/reducers/reducer.state";
import { Harbor } from "./harbor.interface";
import { initialErrorMessage } from '../../assets/error/errorMessage.initial';
import { initialHarbor } from "./harbor.initial";

export const initialState: stateReducer<Harbor> = {
    loading: false,
    error: null,
    item: initialHarbor,
    itens: [],
}

export const harborReducer = (state: stateReducer<Harbor> = initialState, action: any ): stateReducer<Harbor> => {
    switch (action.type) {
        case constants.CREATE_START+"harbor":
            return { ...state, error: null, loading: true }
        case constants.CREATE_SUCCESS+"harbor":
            return { ...state, error: [initialErrorMessage], loading: false, itens: [...state.itens as Harbor[], action.payload as Harbor], item: action.payload as Harbor }
        case constants.CREATE_ERROR+"harbor":
            return { ...state, error: action.payload, loading: false }

        case constants.RETRIEVE_ALL_START+"harbor":
            return { ...state, error: null, loading: true }
        case constants.RETRIEVE_ALL_SUCCESS+"harbor":
            return { ...state, error: null, loading: false, itens: action.payload as Harbor[] }
        case constants.RETRIEVE_ALL_ERROR+"harbor":
            return { ...state, error: action.payload, loading: false }

        // case constants.RETRIEVE_START+"harbor":
        //     return { ...state, error: null, loading: true }
        // case constants.RETRIEVE_SUCCESS+"harbor":
        //     return { ...state, error: null, loading: false, itens: [...state.itens], item: action.payload }
        // case constants.RETRIEVE_ERROR+"harbor":
        //     return { ...state, error: action.payload, loading: false, itens: [], item: {} }

        case constants.UPDATE_START+"harbor":
            return { ...state, error: null, loading: true }
        case constants.UPDATE_SUCCESS+"harbor":
            return { ...state, error: [initialErrorMessage], loading: false, itens: [...state.itens.filter(item => item.id !== action.payload.id), action.payload], item: action.payload }
        case constants.UPDATE_ERROR+"harbor":
            return { ...state, error: action.payload, loading: false }

        case constants.DELETE_START+"harbor":
            return { ...state, error: null, loading: true }
        case constants.DELETE_SUCCESS+"harbor":
            return { ...state, error: [initialErrorMessage], loading: false, itens: state.itens.filter(item => item.id !== action.payload.id) }
        case constants.DELETE_ERROR+"harbor":
            return { ...state, error: action.payload, loading: false }

        // case constants.DELETE_ALL_START+"harbor":
        //     return { ...state, error: null, loading: true }
        // case constants.DELETE_ALL_SUCCESS+"harbor":
        //     return { ...state, error: [initialErrorMessage], loading: false, itens: state.itens }
        // case constants.DELETE_ALL_ERROR+"harbor":
        //     return { ...state, error: action.payload, loading: false }

        default:
            return state
    }
}