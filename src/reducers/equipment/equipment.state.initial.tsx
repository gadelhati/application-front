import { initialEquipment } from "../../components/equipment/equipment.initial";
import { Equipment } from "../../components/equipment/equipment.interface";
import { stateReducer } from "../reducer.state";

export const initialState: stateReducer<Equipment> = {
    loading: false,
    error: null,
    item: initialEquipment,
    itens: [],
}