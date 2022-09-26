import { constants } from "../../../reducers/constants"
import { stateReducer } from "../../../reducers/reducers/reducer.state";
import { StationOffShore } from "./station.offshore.interface";
import { initialErrorMessage } from '../../../assets/error/errorMessage.initial';
import { initialStationOffShore } from "./station.offshore.initial";

export const initialState: stateReducer<StationOffShore> = {
    loading: false,
    error: null,
    item: initialStationOffShore,
    itens: [],
}

export const stationOffShoreReducer = (state: stateReducer<StationOffShore> = initialState, action: any ): stateReducer<StationOffShore> => {
    switch (action.type) {
        case constants.CREATE_START+"stationOffShore":
            return { ...state, error: null, loading: true }
        case constants.CREATE_SUCCESS+"stationOffShore":
            return { ...state, error: [initialErrorMessage], loading: false, itens: [...state.itens as StationOffShore[], action.payload as StationOffShore], item: action.payload as StationOffShore }
        case constants.CREATE_ERROR+"stationOffShore":
            return { ...state, error: action.payload, loading: false }

        case constants.RETRIEVE_ALL_START+"stationOffShore":
            return { ...state, error: null, loading: true }
        case constants.RETRIEVE_ALL_SUCCESS+"stationOffShore":
            return { ...state, error: null, loading: false, itens: action.payload as StationOffShore[] }
        case constants.RETRIEVE_ALL_ERROR+"stationOffShore":
            return { ...state, error: action.payload, loading: false }

        // case constants.RETRIEVE_START+"stationOffShore":
        //     return { ...state, error: null, loading: true }
        // case constants.RETRIEVE_SUCCESS+"stationOffShore":
        //     return { ...state, error: null, loading: false, itens: [...state.itens], item: action.payload }
        // case constants.RETRIEVE_ERROR+"stationOffShore":
        //     return { ...state, error: action.payload, loading: false, itens: [], item: {} }

        case constants.UPDATE_START+"stationOffShore":
            return { ...state, error: null, loading: true }
        case constants.UPDATE_SUCCESS+"stationOffShore":
            return { ...state, error: [initialErrorMessage], loading: false, itens: [...state.itens.filter(item => item.id !== action.payload.id), action.payload], item: action.payload }
        case constants.UPDATE_ERROR+"stationOffShore":
            return { ...state, error: action.payload, loading: false }

        case constants.DELETE_START+"stationOffShore":
            return { ...state, error: null, loading: true }
        case constants.DELETE_SUCCESS+"stationOffShore":
            return { ...state, error: [initialErrorMessage], loading: false, itens: state.itens.filter(item => item.id !== action.payload.id) }
        case constants.DELETE_ERROR+"stationOffShore":
            return { ...state, error: action.payload, loading: false }

        // case constants.DELETE_ALL_START+"stationOffShore":
        //     return { ...state, error: null, loading: true }
        // case constants.DELETE_ALL_SUCCESS+"stationOffShore":
        //     return { ...state, error: [initialErrorMessage], loading: false, itens: state.itens }
        // case constants.DELETE_ALL_ERROR+"stationOffShore":
        //     return { ...state, error: action.payload, loading: false }

        default:
            return state
    }
}