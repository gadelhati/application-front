import { initialManufacturer } from "../../components/manufacturer/manufacturer.initial";
import { Manufacturer } from "../../components/manufacturer/manufacturer.interface";
import { stateReducer } from "../../reducers/reducers/reducer.state";

export const initialState: stateReducer<Manufacturer> = {
    loading: false,
    error: null,
    item: initialManufacturer,
    itens: [],
}