import { initialPlatform } from "../../components/platform/platform.initial";
import { Platform } from "../../components/platform/platform.interface";
import { stateReducer } from "../reducer.state";

export const initialState: stateReducer<Platform> = {
    loading: false,
    error: null,
    item: initialPlatform,
    itens: [],
}