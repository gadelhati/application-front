import { Institution } from "../institution/institution.interface";
import { Station } from "../station/station.interface";

export interface Harbor {
    id: '',
    name: '',
    institution: Institution,
    station: Station,
}