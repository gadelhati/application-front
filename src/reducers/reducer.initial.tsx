import { Observation } from "../components/observation/observation.interface";
import { stateReducer } from "./reducer.state";

// export const initialState = <T extends Observation> (object: T) => {
// export const initialState = <T extends stateReducer<Observation>> (x: T) => {
// export const initialState: <T extends {}>(oi: T): T = {
export const initialState: stateReducer<Observation> = {
    loading: false,
    error: null,
    item: {},
    itens: [],
}

// export const identity = <T>(value: T): T => value;

// export const isSSN = <T>(value: any): value is T => { 
//     return 'id' in value && typeof value.id === 'string'; 
// }
// type CanRun = {
//     run(): void;
// };

// export const returnInArray = <T exteds CanRun>(object: T): void => {
//   object.run();
// }

// export const strArray = returnInArray<Observation>('hello')
// export const numArray = returnInArray<number>(100)
