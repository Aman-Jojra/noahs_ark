/**
 * Auto converted with http://www.json2ts.com/
 */
declare module user {

    export interface Name {
        title: string;
        first: string;
        last: string;
    }

    export interface Coordinates {
        latitude: string;
        longitude: string;
    }

    export interface Timezone {
        offset: string;
        description: string;
    }

    export interface Street {
        number: number;
        name: string;
    }

    export interface Location {
        street: Street;
        city: string;
        state: string;
        postcode: string;
        coordinates: Coordinates;
        timezone: Timezone;
        country: string;
    }

    export interface Login {
        uuid: string;
        username: string;
        password: string;
        salt: string;
        md5: string;
        sha1: string;
        sha256: string;
    }

    export interface Dob {
        date: Date;
        age: number;
    }

    export interface Registered {
        date: Date;
        age: number;
    }

    export interface Id {
        name: string;
        value?: any;
    }

    export interface Picture {
        large: string;
        medium: string;
        thumbnail: string;
    }

    export interface User {
        gender: string;
        name: Name;
        location: Location;
        email: string;
        login: Login;
        dob: Dob;
        registered: Registered;
        phone: string;
        cell: string;
        id: Id;
        picture: Picture;
        nat: string;
    }

    export interface Info {
        seed: string;
        results: number;
        page: number;
        version: string;
    }

    export interface RootObject {
        results: User[];
        info: Info;
    }

}

