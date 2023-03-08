import { constants } from "../../reducers/constants"
import { stateReducer } from "../../reducers/reducers/reducer.state";
import { Surveying } from "./surveying.interface";
import { initialErrorMessage } from '../../assets/error/errorMessage.initial';
import { initialSurveying } from "./surveying.initial";

export const initialState: stateReducer<Surveying> = {
    loading: false,
    error: null,
    item: initialSurveying,
    itens: [],
}

export const surveyingReducer = (state: stateReducer<Surveying> = initialState, action: any ): stateReducer<Surveying> => {
    switch (action.type) {
        case constants.CREATE_START+"surveying":
            return { ...state, error: null, loading: true }
        case constants.CREATE_SUCCESS+"surveying":
            return { ...state, error: [initialErrorMessage], loading: false, itens: [...state.itens as Surveying[], action.payload as Surveying], item: action.payload as Surveying }
        case constants.CREATE_ERROR+"surveying":
            return { ...state, error: action.payload, loading: false }

        case constants.RETRIEVE_ALL_START+"surveying":
            return { ...state, error: null, loading: true }
        case constants.RETRIEVE_ALL_SUCCESS+"surveying":
            return { ...state, error: null, loading: false, itens: action.payload as Surveying[] }
        case constants.RETRIEVE_ALL_ERROR+"surveying":
            return { ...state, error: action.payload, loading: false }

        // case constants.RETRIEVE_START+"surveying":
        //     return { ...state, error: null, loading: true }
        // case constants.RETRIEVE_SUCCESS+"surveying":
        //     return { ...state, error: null, loading: false, itens: [...state.itens], item: action.payload }
        // case constants.RETRIEVE_ERROR+"surveying":
        //     return { ...state, error: action.payload, loading: false, itens: [], item: {} }

        case constants.UPDATE_START+"surveying":
            return { ...state, error: null, loading: true }
        case constants.UPDATE_SUCCESS+"surveying":
            return { ...state, error: [initialErrorMessage], loading: false, itens: [...state.itens.filter(item => item.id !== action.payload.id), action.payload], item: action.payload }
        case constants.UPDATE_ERROR+"surveying":
            return { ...state, error: action.payload, loading: false }

        case constants.DELETE_START+"surveying":
            return { ...state, error: null, loading: true }
        case constants.DELETE_SUCCESS+"surveying":
            return { ...state, error: [initialErrorMessage], loading: false, itens: state.itens.filter(item => item.id !== action.payload.id) }
        case constants.DELETE_ERROR+"surveying":
            return { ...state, error: action.payload, loading: false }

        // case constants.DELETE_ALL_START+"surveying":
        //     return { ...state, error: null, loading: true }
        // case constants.DELETE_ALL_SUCCESS+"surveying":
        //     return { ...state, error: [initialErrorMessage], loading: false, itens: state.itens }
        // case constants.DELETE_ALL_ERROR+"surveying":
        //     return { ...state, error: action.payload, loading: false }

        default:
            return state
    }
}