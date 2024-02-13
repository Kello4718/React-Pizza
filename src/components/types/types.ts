export type Params = {
    id: string;
};

export type Pizza = {
    id: number;
    name: string;
    unitPrice: number;
    ingredients: string[];
    soldOut: boolean;
    imageUrl: string;
};

export type Good = {
    id: string;
    imageUrl: string;
    ingredients: string[];
    name: string;
    quantity: number;
    soldOut: boolean;
    totalPrice: number;
    unitPrice: number;
};

export type TOrder = {
    id?: string;
    status?: string;
    priority: boolean;
    priorityPrice: number;
    orderPrice?: number;
    estimatedDelivery?: string;
    cart?: Good[];
};

export type TError = {
    phone?: string;
};

export type GeolocationCoordinates = {
    latitude: number;
    longitude: number;
    altitude: number | null;
    accuracy: number;
    altitudeAccuracy: number | null;
    heading: number | null;
    speed: number | null;
};
export type GeolocationPosition = {
    coords: GeolocationCoordinates;
    timestamp: number;
};

export type ClassesByTypeKeys = "primary" | "secondary" | "small" | "round";
export type ClassesByType = Record<ClassesByTypeKeys, string>;
