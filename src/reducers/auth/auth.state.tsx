import { Auth } from "../../components/auth/auth.interface";

export interface stateAuth {
    loading: boolean,
    error: string | null,
    item: Auth,
    itens: Auth[],
    isLoggedIn: boolean,
}