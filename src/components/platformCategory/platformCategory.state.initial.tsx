import { initialPlatformCategory } from "../../components/platformCategory/platformCategory.initial";
import { PlatformCategory } from "../../components/platformCategory/platformCategory.interface";
import { stateReducer } from "../../reducers/reducers/reducer.state";

export const initialState: stateReducer<PlatformCategory> = {
    loading: false,
    error: null,
    item: initialPlatformCategory,
    itens: [],
}