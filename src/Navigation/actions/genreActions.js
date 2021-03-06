import { FETCH_GENRES, NEW_MOVIES } from './types';

export const fetchGenres = () => dispatch => {
    fetch(`${process.env.REACT_APP_BASE_URL}/genre/movie/list?${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then(genres => dispatch({
            type: FETCH_GENRES,
            payload: genres.genres
        }))
        .catch(error => console.log('Error fetching genres: ' + error))
}

export const setGenre = (action) => {
    return {
        type: 'SET_GENRE',
        payLoad: action
    }
}


export const updatedMovieList = (value) => dispatch => {
    fetch(`${process.env.REACT_APP_API_URL}&with_genres=${value}`)
        .then(res => res.json())
        .then(post => {
            dispatch({
                type: NEW_MOVIES,
                payload: post.results
            });
        })
        .catch(error => console.log('Error fetching selected genre movies: ' + error))
}
