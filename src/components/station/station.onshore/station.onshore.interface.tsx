import { Station } from "../station.interface";
import { Platform } from "../../platform/platform.interface";

export interface StationOnShore extends Station {
    id: string,
    name: string,
    dateTime: Date,
    latitude: string,
    longitude: string,
    telegraphicCallsign: string,
    marsdenSquare_10: number,
    marsdenSubSquare_1: number,
    wmoSquare: number,
    marsdenSubSquare_5: number,
    collectionDepth: string
}