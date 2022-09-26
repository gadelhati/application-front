import { StationOffShore } from "./station.offshore.interface";
import { initialPlatform } from "../../platform/platform.initial";
import { initialEquipment } from "../../equipment/equipment.initial";
import { initialInstitution } from "../../institution/institution.initial";
import { initialCountry } from "../../country/country.initial";

export const initialStationOffShore: StationOffShore = {
    id: '',
    localDepth: 0,
    com: '',
    // commission: initialCommission,
    // stationCategory: initialStationCategory,
    equipment: initialEquipment,
    // surveying: initialSurveying,
    responsible: initialInstitution,
    country: initialCountry,
    first: new Date(),
    last: new Date(),
    latitudeMostBottom: 0,
    latitudeMostTop: 0,
    longitudeMostRight: 0,
    longitudeMostLeft: 0,
    platform: initialPlatform,
}