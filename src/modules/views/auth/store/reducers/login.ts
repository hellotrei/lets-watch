import { LoginRequest } from '../../services/loginService';
import { GET_TOKEN, DELETE_TOKEN } from '../actions/loginActions';

export interface InitialTokenState {
    accessToken: LoginRequest | null;
}

const initialState: InitialTokenState = {
    accessToken: null,
};

export const login = (
    state = initialState,
    action: { type: string; payload: LoginRequest | null }
    ) => {
    switch (action.type) {
        case GET_TOKEN:
        return {
            ...state,
            accessToken: action.payload,
        };
        case DELETE_TOKEN:
        return {
            ...state,
            accessToken: null,
        };
        default:
        return state;
    }
};
