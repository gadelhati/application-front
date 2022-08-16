import { ErrorMessage } from "../../actions/type/errorMessage";
import { Manufacturer } from "../../components/manufacturer/manufacturer.interface"

export interface stateReducer {
    manufacturerl: boolean,
    manufacturere: ErrorMessage[] | null,
    manufactureri: Manufacturer,
    manufactureris: Manufacturer[],
}