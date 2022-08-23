import { Station } from "../station.interface";
import { Platform } from "../../platform/platform.interface";

export interface StationOffShore extends Station {
    first: Date,
    last: Date,
    latitudeMostBottom: number,
    latitudeMostTop: number,
    longitudeMostRight: number,
    longitudeMostLeft: number,
    platform: Platform,
}