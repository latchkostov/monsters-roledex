import { Monster } from "./monster";

export interface AppState {
    searchField: string,
    monsters: Monster[]
}