import { combineReducers } from "redux";
import { movies } from "../views/movie/store/reducers/movies";
import { login } from "../views/auth/store/reducers/login";

export const reducers = combineReducers({
    movies,
    login,
});
