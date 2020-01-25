export type key = {
    dob: string,
    age: string,
    birthPlace: string
};

/**new learning */
type body = {
    id: string,
    title: string,
    value: string,
    dob?: string,
    age?: string,
    birthPlace?: string
}

export type Response<T> = {
    [P in keyof T]: body
}

export const response: Response<key> = {
    dob: {
        id: 'born',
        title: 'born',
        value: '05/02/1990'
    },
    age: {
        id: 'age',
        title: 'age',
        value: '26'
    },
    birthPlace: {
        id: 'birthPlace',
        title: 'From',
        value: 'Fresno State'
    }

}