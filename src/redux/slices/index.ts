import { createSlice } from '@reduxjs/toolkit';
import { fetchCircles } from '@redux/thunks';

export interface CircleState {
    data: Circle[];
    loading: boolean;
    error: string | null;
}

export interface Circle {
    id: string;
    name: string;
    organization: CircleOrganization;
    address: string;
    capacity: number;
    description: string;
    latitude: string;
    longitude: string;
}

export interface CircleOrganization {
    id: string;
    name: string;
}

const initialState: CircleState = {
    data: [],
    loading: false,
    error: null,
};

const circlesSlice = createSlice({
    name: 'circles',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCircles.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        builder.addCase(fetchCircles.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        })
        builder.addCase(fetchCircles.rejected, (state) => {
            state.error = 'rejected'
        })
    },
});

export default circlesSlice.reducer;