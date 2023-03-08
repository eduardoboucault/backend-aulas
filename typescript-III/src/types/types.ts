export enum PET_SIZE {
    SMALL = 'Porte pequeno',
    MEDIUM = 'Porte médio',
    LARGE = 'Porte grande'
};

export type Tpet = {
    id: string,
    name: string,
    age: number,
    size: PET_SIZE
};
