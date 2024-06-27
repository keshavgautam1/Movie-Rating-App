// reducers/index.js

import { combineReducers } from "redux";
import {
  SET_RATING,
  ADD_MOVIES,
  ADD_TO_FAVOURITES,
  REMOVE_FROM_FAVOURITES,
  SET_SHOW_FAVOURITES,
  ADD_MOVIES_TO_LIST,
  ADD_SEARCH_RESULT,
} from "../actions";

// Initial state for movies
const initialMoviesState = {
  list: [],
  favourites: [],
  showFavourites: false,
};

// Movies reducer
function movies(state = initialMoviesState, action) {
  switch (action.type) {
    case ADD_MOVIES:
      return {
        ...state,
        list: action.movies,
      };
    case ADD_TO_FAVOURITES:
      return {
        ...state,
        favourites: [action.movie, ...state.favourites],
      };
    case REMOVE_FROM_FAVOURITES:
      const filteredArray = state.favourites.filter(
        (movie) => movie.Title !== action.movie.Title
      );
      return {
        ...state,
        favourites: filteredArray,
      };
    case SET_SHOW_FAVOURITES:
      return {
        ...state,
        showFavourites: action.val,
      };
    case ADD_MOVIES_TO_LIST:
      return {
        ...state,
        list: [action.movie, ...state.list],
      };
    case SET_RATING:
      return {
        ...state,
        list: state.list.map((movie) =>
          movie.id === action.movieId
            ? { ...movie, rating: action.rating }
            : movie
        ),
        favourites: state.favourites.map((movie) =>
          movie.id === action.movieId
            ? { ...movie, rating: action.rating }
            : movie
        ),
      };
    default:
      return state;
  }
}

// Initial state for search
const initialSearchState = {
  result: {},
  showSearchResults: false,
};

// Search reducer
function search(state = initialSearchState, action) {
  switch (action.type) {
    case ADD_SEARCH_RESULT:
      return {
        ...state,
        result: action.movie,
        showSearchResults: true,
      };
    case ADD_MOVIES_TO_LIST:
      return {
        ...state,
        showSearchResults: false,
      };
    default:
      return state;
  }
}

// Combine reducers
export default combineReducers({
  movies,
  search,
});
