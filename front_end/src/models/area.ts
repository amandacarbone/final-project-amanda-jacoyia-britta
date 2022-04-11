export interface Area {
    meals: [{
        strArea: string
    }]
}

export interface AreaFilter {
    american: boolean,
    mexican: boolean,
    asian: boolean,
    indian: boolean,
    mediterranean: boolean
}