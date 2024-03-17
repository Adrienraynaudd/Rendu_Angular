export interface Classe {
    id: number;
    name: string;
    archetypes: Archetype[];
}

export interface Archetype {
    name: string;
    desc: string;
}