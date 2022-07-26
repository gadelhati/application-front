import { OM } from "../om/om.interface";

export interface User {
    id: string,
    username: string,
    email: string,
    password: string,
    active?: boolean,
    OM?: OM,
}