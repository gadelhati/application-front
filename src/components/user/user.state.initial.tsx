import { initialUser } from "../../components/user/user.initial";
import { User } from "../../components/user/user.interface";
import { stateReducer } from "../../reducers/reducers/reducer.state";

export const initialState: stateReducer<User> = {
    loading: false,
    error: null,
    item: initialUser,
    itens: [],
}