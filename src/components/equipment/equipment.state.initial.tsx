import { initialEquipment } from "./equipment.initial";
import { Equipment } from "./equipment.interface";
import { stateReducer } from "../../reducers/reducers/reducer.state";

export const initialState: stateReducer<Equipment> = {
    loading: false,
    error: null,
    item: initialEquipment,
    itens: [],
}