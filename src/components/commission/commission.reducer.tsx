import { constants } from "../../reducers/constants"
import { stateReducer } from "../../reducers/reducers/reducer.state";
import { Commission } from "./commission.interface";
import { initialErrorMessage } from '../../assets/error/errorMessage.initial';
import { initialCommission } from "./commission.initial";


export const initialState: stateReducer<Commission> = {
    loading: false,
    error: null,
    item: initialCommission,
    itens: [],
}

export const commissionReducer = (state: stateReducer<Commission> = initialState, action: any ): stateReducer<Commission> => {
    switch (action.type) {
        case constants.CREATE_START+"commission":
            return { ...state, error: null, loading: true }
        case constants.CREATE_SUCCESS+"commission":
            return { ...state, error: [initialErrorMessage], loading: false, itens: [...state.itens as Commission[], action.payload as Commission], item: action.payload as Commission }
        case constants.CREATE_ERROR+"commission":
            return { ...state, error: action.payload, loading: false }

        case constants.RETRIEVE_ALL_START+"commission":
            return { ...state, error: null, loading: true }
        case constants.RETRIEVE_ALL_SUCCESS+"commission":
            return { ...state, error: null, loading: false, itens: action.payload as Commission[] }
        case constants.RETRIEVE_ALL_ERROR+"commission":
            return { ...state, error: action.payload, loading: false }

        // case constants.RETRIEVE_START+"commission":
        //     return { ...state, error: null, loading: true }
        // case constants.RETRIEVE_SUCCESS+"commission":
        //     return { ...state, error: null, loading: false, itens: [...state.itens], item: action.payload }
        // case constants.RETRIEVE_ERROR+"commission":
        //     return { ...state, error: action.payload, loading: false, itens: [], item: {} }

        case constants.UPDATE_START+"commission":
            return { ...state, error: null, loading: true }
        case constants.UPDATE_SUCCESS+"commission":
            return { ...state, error: [initialErrorMessage], loading: false, itens: [...state.itens.filter(item => item.id !== action.payload.id), action.payload], item: action.payload }
        case constants.UPDATE_ERROR+"commission":
            return { ...state, error: action.payload, loading: false }

        case constants.DELETE_START+"commission":
            return { ...state, error: null, loading: true }
        case constants.DELETE_SUCCESS+"commission":
            return { ...state, error: [initialErrorMessage], loading: false, itens: state.itens.filter(item => item.id !== action.payload.id) }
        case constants.DELETE_ERROR+"commission":
            return { ...state, error: action.payload, loading: false }

        // case constants.DELETE_ALL_START+"commission":
        //     return { ...state, error: null, loading: true }
        // case constants.DELETE_ALL_SUCCESS+"commission":
        //     return { ...state, error: [initialErrorMessage], loading: false, itens: state.itens }
        // case constants.DELETE_ALL_ERROR+"commission":
        //     return { ...state, error: action.payload, loading: false }

        default:
            return state
    }
}