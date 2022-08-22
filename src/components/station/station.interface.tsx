import { Country } from "../country/country.interface";
import { Equipment } from "../equipment/equipment.interface";
import { Institution } from "../institution/institution.interface";

export interface Station {
    id: string,
    localDepth: number,
    com: string,
    commission: Commission,
    stationCategory: StationCategory,
    equipment: Equipment,
    surveying: Surveying,
    responsible: Institution,
    country: Country,
}