import { constants } from "../../reducers/constants"
import { stateReducer } from "../../reducers/reducers/reducer.state";
import { Equipment } from "../../components/equipment/equipment.interface";
import { initialErrorMessage } from '../../assets/error/errorMessage.initial';
import { initialEquipment } from "./equipment.initial";

export const initialState: stateReducer<Equipment> = {
    loading: false,
    error: null,
    item: initialEquipment,
    itens: [],
}

export const equipmentReducer = (state: stateReducer<Equipment> = initialState, action: any ): stateReducer<Equipment> => {
    switch (action.type) {
        case constants.CREATE_START+"equipment":
            return { ...state, error: null, loading: true }
        case constants.CREATE_SUCCESS+"equipment":
            return { ...state, error: [initialErrorMessage], loading: false, itens: [...state.itens as Equipment[], action.payload as Equipment], item: action.payload as Equipment }
        case constants.CREATE_ERROR+"equipment":
            return { ...state, error: action.payload, loading: false }

        case constants.RETRIEVE_ALL_START+"equipment":
            return { ...state, error: null, loading: true }
        case constants.RETRIEVE_ALL_SUCCESS+"equipment":
            return { ...state, error: null, loading: false, itens: action.payload as Equipment[] }
        case constants.RETRIEVE_ALL_ERROR+"equipment":
            return { ...state, error: action.payload, loading: false }

        // case constants.RETRIEVE_START+"equipment":
        //     return { ...state, error: null, loading: true }
        // case constants.RETRIEVE_SUCCESS+"equipment":
        //     return { ...state, error: null, loading: false, itens: [...state.itens], item: action.payload }
        // case constants.RETRIEVE_ERROR+"equipment":
        //     return { ...state, error: action.payload, loading: false, itens: [], item: {} }

        case constants.UPDATE_START+"equipment":
            return { ...state, error: null, loading: true }
        case constants.UPDATE_SUCCESS+"equipment":
            return { ...state, error: [initialErrorMessage], loading: false, itens: [...state.itens.filter(item => item.id !== action.payload.id), action.payload], item: action.payload }
        case constants.UPDATE_ERROR+"equipment":
            return { ...state, error: action.payload, loading: false }

        case constants.DELETE_START+"equipment":
            return { ...state, error: null, loading: true }
        case constants.DELETE_SUCCESS+"equipment":
            return { ...state, error: [initialErrorMessage], loading: false, itens: state.itens.filter(item => item.id !== action.payload.id) }
        case constants.DELETE_ERROR+"equipment":
            return { ...state, error: action.payload, loading: false }

        // case constants.DELETE_ALL_START+"equipment":
        //     return { ...state, error: null, loading: true }
        // case constants.DELETE_ALL_SUCCESS+"equipment":
        //     return { ...state, error: [initialErrorMessage], loading: false, itens: state.itens }
        // case constants.DELETE_ALL_ERROR+"equipment":
        //     return { ...state, error: action.payload, loading: false }

        default:
            return state
    }
}