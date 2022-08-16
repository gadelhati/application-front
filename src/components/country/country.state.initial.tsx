import { initialCountry } from "../../components/country/country.initial";
import { Country } from "../../components/country/country.interface";
import { stateReducer } from "../../reducers/reducers/reducer.state";

export const initialState: stateReducer<Country> = {
    loading: false,
    error: null,
    item: initialCountry,
    itens: [],
}