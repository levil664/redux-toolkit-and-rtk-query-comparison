import axios from 'axios';

export const BASE_API_URL = process.env.NEXT_PUBLIC_BASE_URL

export enum methodsRequests {
    GET = "get",
    POST = "post",
    PUT = "put",
    DELETE = "delete",
}

const $api = axios.create({
    withCredentials: true,
    baseURL: BASE_API_URL,
    headers: {
        Authorization: 'Bearer yourToken',
        'Content-Type': 'application/json',
    },
});

export default $api;