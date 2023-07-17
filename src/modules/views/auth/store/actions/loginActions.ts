import { LoginRequest } from '../../services/loginService';
export const GET_TOKEN = 'GET_TOKEN';
export const DELETE_TOKEN = 'DELETE_TOKEN';

export const accessToken = (token: string) => ({
    type: GET_TOKEN,
    payload: { token } as LoginRequest,
});

export const deleteToken = () => ({
    type: DELETE_TOKEN,
});

