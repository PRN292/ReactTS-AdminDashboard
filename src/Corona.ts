export class CoronaData {
    data: Country[] | undefined

    constructor() {
        this.data = undefined;

    }
}

class Coordinates {
    latitude: number
    longitude: number
    constructor() {
        this.latitude = 0
        this.longitude = 0
    }
}

class Today {
    deaths: number
    confirmed: number
    constructor() {
        this.deaths = 0
        this.confirmed = 0
    }
}

class Calculated {
    death_rate: number
    recovery_rate: number
    recovered_vs_
}

class LatestData {
    deaths: number
    confirmed: number
    recovered: number
    critical: number

}

class Country {
    coordinates: Coordinates
    name: string
    code: string
    population: number
    updated_at: string
    today: Today

}
