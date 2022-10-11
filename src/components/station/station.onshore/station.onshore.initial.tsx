import { StationOnShore } from "./station.onshore.interface";
import { initialPlatform } from "../../platform/platform.initial";
import { initialEquipment } from "../../equipment/equipment.initial";
import { initialInstitution } from "../../institution/institution.initial";
import { initialCountry } from "../../country/country.initial";

export const initialStationOnShore: StationOnShore = {
    id: '',
    localDepth: 0,
    com: '',
    active: false,
    // commission: initialCommission,
    // stationCategory: initialStationCategory,
    equipment: initialEquipment,
    // surveying: initialSurveying,
    responsible: initialInstitution,
    country: initialCountry,
    name: '',
    dateTime: new Date(),
    latitude: '',
    longitude: '',
    telegraphicCallsign: '',
    marsdenSquare_10: 0,
    marsdenSubSquare_1: 0,
    wmoSquare: 0,
    marsdenSubSquare_5: 0,
    collectionDepth: ''
}