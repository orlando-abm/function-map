export default interface IStockLocations {
    active: boolean;
    address1: string;
    address2: string;
    city: string;
    country: Country;
    country_id: number;
    id: number;
    name: string;
    phone: string;
    state: State;
    state_id: number;
    state_name: null;
    zipcode: string;
    coordinates: Coordinates;
    polygons: Array<Coordinates>
}

export interface Country {
    id: number;
    iso_name: string;
    iso: string;
    iso3: string;
    name: string;
    numcode: null;
}

export interface State {
    id: number;
    name: string;
    abbr: string;
    country_id: number;
}

export interface Coordinates {
    lng: number;
    lat: number;
}
