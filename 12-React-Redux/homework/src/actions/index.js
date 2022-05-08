// export const GET_MOVIES = 'GET_MOVIES'
// export const GET_MOVIES_DETAIL = 'GET_MOVIES_DETAIL'
// export const ADD_MOVIE_FAVORITE = 'ADD_MOVIE_FAVORITE'
// export const REMOVE_MOVIE_FAVORITE = 'REMOVE_MOVIE_FAVORITE'


export function getMovies(title){
    return function(dispatch){
        return fetch(`https://www.omdbapi.com/?apikey=d1dcdf9c&s=${title}`)
        .then(res => res.json())
        .then(json => {
            dispatch({type:'GET_MOVIES', payload: json})
        });
    }
}

export function getMovieDetail(id){
    return function(dispatch){
        return fetch(`https://www.omdbapi.com/?apikey=d1dcdf9c&i=${id}`)
        .then(res => res.json())
        .then(movie => {
            dispatch({type:'GET_MOVIES_DETAIL', payload: movie})
        })
    }
}

export function addMovieFavorite(movie){
    return {
        type: 'ADD_MOVIE_FAVORITE',
        payload: movie
    }
}

export function removeMovieFavorite(id){
    return {
        type: 'REMOVE_MOVIE_FAVORITE',
        payload: id
    }
}