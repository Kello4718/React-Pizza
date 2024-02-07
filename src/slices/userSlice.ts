import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getAddress from "../services/apiGeocoding";

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

export type InitialState = {
    name: string;
    status: "idle" | "pending" | "succeeded" | "failed";
    position: Pick<GeolocationCoordinates, "latitude" | "longitude"> | null;
    address: string;
    error: string;
};

const initialState: InitialState = {
    name: "",
    status: "idle",
    position: null,
    address: "",
    error: "",
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        updateName(state, action) {
            state.name = action.payload;
        },
    },
});

const getPosition = () => {
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
};

export const fetchAddress = createAsyncThunk("/user/fetchAddress", async () => {
    const positionObj = (await getPosition()) as GeolocationPosition;
    const position = {
        latitude: positionObj?.coords.latitude,
        longitude: positionObj?.coords.longitude,
    };

    const addressObj = await getAddress(position);
    const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

    return { position, address };
});

export const getUser = ({ user }: { user: InitialState }) => user;
export const { updateName } = userSlice.actions;
export default userSlice.reducer;
