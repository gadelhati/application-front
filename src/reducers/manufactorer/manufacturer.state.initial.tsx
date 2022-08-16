import { initialManufacturer } from "../../components/manufacturer/manufacturer.initial";
import { stateReducer } from "./manufacturer.reducer.state";

export const initialState: stateReducer = {
    manufacturerl: false,
    manufacturere: null,
    manufactureri: initialManufacturer,
    manufactureris: [],
}