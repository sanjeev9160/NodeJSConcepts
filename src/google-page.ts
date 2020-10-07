import axios, { AxiosResponse } from 'axios';

export async function getGooglePageAsync() {
    const response = await axios.get('https://www.google.co.in')
    return response;
}