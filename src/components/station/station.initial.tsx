import { initialCountry } from "../country/country.initial";
import { initialEquipment } from "../equipment/equipment.initial";
import { initialInstitution } from "../institution/institution.initial";
import { Station } from "./station.interface";

export const initialStation: Station = {
    id: '',
    localDepth: 0,
    com: '',
    // commission: initialCommission,
    // stationCategory: initialStationCategory,
    equipment: initialEquipment,
    // surveying: initialSurveying,
    responsible: initialInstitution,
    country: initialCountry,
}