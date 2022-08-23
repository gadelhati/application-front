import { constants } from "../../../reducers/constants"
import { stateReducer } from "../../../reducers/reducers/reducer.state";
import { StationOnShore } from "./station.onshore.interface";
import { initialErrorMessage } from '../../../assets/error/errorMessage.initial';
import { initialStationOnShore } from "./station.onshore.initial";

export const initialState: stateReducer<StationOnShore> = {
    loading: false,
    error: null,
    item: initialStationOnShore,
    itens: [],
}

export const stationOnShoreReducer = (state: stateReducer<StationOnShore> = initialState, action: any ): stateReducer<StationOnShore> => {
    switch (action.type) {
        case constants.CREATE_START+"stationOnShore":
            return { ...state, error: null, loading: true }
        case constants.CREATE_SUCCESS+"stationOnShore":
            return { ...state, error: [initialErrorMessage], loading: false, itens: [...state.itens as StationOnShore[], action.payload as StationOnShore], item: action.payload as StationOnShore }
        case constants.CREATE_ERROR+"stationOnShore":
            return { ...state, error: action.payload, loading: false }

        case constants.RETRIEVE_ALL_START+"stationOnShore":
            return { ...state, error: null, loading: true }
        case constants.RETRIEVE_ALL_SUCCESS+"stationOnShore":
            return { ...state, error: null, loading: false, itens: action.payload as StationOnShore[] }
        case constants.RETRIEVE_ALL_ERROR+"stationOnShore":
            return { ...state, error: action.payload, loading: false }

        // case constants.RETRIEVE_START+"stationOnShore":
        //     return { ...state, error: null, loading: true }
        // case constants.RETRIEVE_SUCCESS+"stationOnShore":
        //     return { ...state, error: null, loading: false, itens: [...state.itens], item: action.payload }
        // case constants.RETRIEVE_ERROR+"stationOnShore":
        //     return { ...state, error: action.payload, loading: false, itens: [], item: {} }

        case constants.UPDATE_START+"stationOnShore":
            return { ...state, error: null, loading: true }
        case constants.UPDATE_SUCCESS+"stationOnShore":
            return { ...state, error: [initialErrorMessage], loading: false, itens: [...state.itens.filter(item => item.id !== action.payload.id), action.payload], item: action.payload }
        case constants.UPDATE_ERROR+"stationOnShore":
            return { ...state, error: action.payload, loading: false }

        case constants.DELETE_START+"stationOnShore":
            return { ...state, error: null, loading: true }
        case constants.DELETE_SUCCESS+"stationOnShore":
            return { ...state, error: [initialErrorMessage], loading: false, itens: state.itens.filter(item => item.id !== action.payload.id) }
        case constants.DELETE_ERROR+"stationOnShore":
            return { ...state, error: action.payload, loading: false }

        // case constants.DELETE_ALL_START+"stationOnShore":
        //     return { ...state, error: null, loading: true }
        // case constants.DELETE_ALL_SUCCESS+"stationOnShore":
        //     return { ...state, error: [initialErrorMessage], loading: false, itens: state.itens }
        // case constants.DELETE_ALL_ERROR+"stationOnShore":
        //     return { ...state, error: action.payload, loading: false }

        default:
            return state
    }
}