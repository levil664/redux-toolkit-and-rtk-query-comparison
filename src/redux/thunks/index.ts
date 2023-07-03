import { createAsyncThunk } from '@reduxjs/toolkit';
import $api from "../../axios/api";

export interface ReturnedData<T> {
    count: number,
    next: string,
    previous: string,
    results: T,
}

export interface Circle {
    id: string,
    name: string,
    organization: CircleOrganization,
    address: string,
    capacity: number,
    description: string,
    latitude: string,
    longitude: string,
}

export interface CircleOrganization {
    id: string,
    name: string,
}

interface AllCirclesParams {
    id?: string,
    organization?: string,
    capacity?: number,
    description?: string,
    ids?: string,
    address?: string,
    'organization_name'?: string,
    'user_location'?: string,
    name?: string,
    page?: string,
    'page_size'?: string,
    radius?: number,
    'student_profile'?: string,
}

export const fetchCircles = createAsyncThunk<Circle[], AllCirclesParams>(
    'circles/fetchCircles',
    async function (_,{rejectWithValue}) {
        try {
            const response = await $api.get(`/organization-management/circles`);

            if (!(200 <= response.status && response.status <= 299)) {
                return rejectWithValue(response.status);
            }
            return response.data.results;
        } catch (error: any) {
            return rejectWithValue({
                error: error.message,
                title: 'No response data LOL',
            });
        }
    }
);