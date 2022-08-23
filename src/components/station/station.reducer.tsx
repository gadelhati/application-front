import { constants } from "../../reducers/constants"
import { stateReducer } from "../../reducers/reducers/reducer.state";
import { Station } from "./station.interface";
import { initialErrorMessage } from '../../assets/error/errorMessage.initial';
import { initialStation } from "./station.initial";

export const initialState: stateReducer<Station> = {
    loading: false,
    error: null,
    item: initialStation,
    itens: [],
}

export const stationReducer = (state: stateReducer<Station> = initialState, action: any ): stateReducer<Station> => {
    switch (action.type) {
        case constants.CREATE_START+"station":
            return { ...state, error: null, loading: true }
        case constants.CREATE_SUCCESS+"station":
            return { ...state, error: [initialErrorMessage], loading: false, itens: [...state.itens as Station[], action.payload as Station], item: action.payload as Station }
        case constants.CREATE_ERROR+"station":
            return { ...state, error: action.payload, loading: false }

        case constants.RETRIEVE_ALL_START+"station":
            return { ...state, error: null, loading: true }
        case constants.RETRIEVE_ALL_SUCCESS+"station":
            return { ...state, error: null, loading: false, itens: action.payload as Station[] }
        case constants.RETRIEVE_ALL_ERROR+"station":
            return { ...state, error: action.payload, loading: false }

        // case constants.RETRIEVE_START+"station":
        //     return { ...state, error: null, loading: true }
        // case constants.RETRIEVE_SUCCESS+"station":
        //     return { ...state, error: null, loading: false, itens: [...state.itens], item: action.payload }
        // case constants.RETRIEVE_ERROR+"station":
        //     return { ...state, error: action.payload, loading: false, itens: [], item: {} }

        case constants.UPDATE_START+"station":
            return { ...state, error: null, loading: true }
        case constants.UPDATE_SUCCESS+"station":
            return { ...state, error: [initialErrorMessage], loading: false, itens: [...state.itens.filter(item => item.id !== action.payload.id), action.payload], item: action.payload }
        case constants.UPDATE_ERROR+"station":
            return { ...state, error: action.payload, loading: false }

        case constants.DELETE_START+"station":
            return { ...state, error: null, loading: true }
        case constants.DELETE_SUCCESS+"station":
            return { ...state, error: [initialErrorMessage], loading: false, itens: state.itens.filter(item => item.id !== action.payload.id) }
        case constants.DELETE_ERROR+"station":
            return { ...state, error: action.payload, loading: false }

        // case constants.DELETE_ALL_START+"station":
        //     return { ...state, error: null, loading: true }
        // case constants.DELETE_ALL_SUCCESS+"station":
        //     return { ...state, error: [initialErrorMessage], loading: false, itens: state.itens }
        // case constants.DELETE_ALL_ERROR+"station":
        //     return { ...state, error: action.payload, loading: false }

        default:
            return state
    }
}