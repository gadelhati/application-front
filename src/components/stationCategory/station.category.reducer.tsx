import { constants } from "../../reducers/constants"
import { stateReducer } from "../../reducers/reducers/reducer.state";
import { StationCategory } from "./station.category.interface";
import { initialErrorMessage } from '../../assets/error/errorMessage.initial';
import { initialStationCategory } from "./station.category.initial";

export const initialState: stateReducer<StationCategory> = {
    loading: false,
    error: null,
    item: initialStationCategory,
    itens: [],
}

export const station_categoryReducer = (state: stateReducer<StationCategory> = initialState, action: any ): stateReducer<StationCategory> => {
    switch (action.type) {
        case constants.CREATE_START+"station_category":
            return { ...state, error: null, loading: true }
        case constants.CREATE_SUCCESS+"station_category":
            return { ...state, error: [initialErrorMessage], loading: false, itens: [...state.itens as StationCategory[], action.payload as StationCategory], item: action.payload as StationCategory }
        case constants.CREATE_ERROR+"station_category":
            return { ...state, error: action.payload, loading: false }

        case constants.RETRIEVE_ALL_START+"station_category":
            return { ...state, error: null, loading: true }
        case constants.RETRIEVE_ALL_SUCCESS+"station_category":
            return { ...state, error: null, loading: false, itens: action.payload as StationCategory[] }
        case constants.RETRIEVE_ALL_ERROR+"station_category":
            return { ...state, error: action.payload, loading: false }

        // case constants.RETRIEVE_START+"station_category":
        //     return { ...state, error: null, loading: true }
        // case constants.RETRIEVE_SUCCESS+"station_category":
        //     return { ...state, error: null, loading: false, itens: [...state.itens], item: action.payload }
        // case constants.RETRIEVE_ERROR+"station_category":
        //     return { ...state, error: action.payload, loading: false, itens: [], item: {} }

        case constants.UPDATE_START+"station_category":
            return { ...state, error: null, loading: true }
        case constants.UPDATE_SUCCESS+"station_category":
            return { ...state, error: [initialErrorMessage], loading: false, itens: [...state.itens.filter(item => item.id !== action.payload.id), action.payload], item: action.payload }
        case constants.UPDATE_ERROR+"station_category":
            return { ...state, error: action.payload, loading: false }

        case constants.DELETE_START+"station_category":
            return { ...state, error: null, loading: true }
        case constants.DELETE_SUCCESS+"station_category":
            return { ...state, error: [initialErrorMessage], loading: false, itens: state.itens.filter(item => item.id !== action.payload.id) }
        case constants.DELETE_ERROR+"station_category":
            return { ...state, error: action.payload, loading: false }

        // case constants.DELETE_ALL_START+"station_category":
        //     return { ...state, error: null, loading: true }
        // case constants.DELETE_ALL_SUCCESS+"station_category":
        //     return { ...state, error: [initialErrorMessage], loading: false, itens: state.itens }
        // case constants.DELETE_ALL_ERROR+"station_category":
        //     return { ...state, error: action.payload, loading: false }

        default:
            return state
    }
}