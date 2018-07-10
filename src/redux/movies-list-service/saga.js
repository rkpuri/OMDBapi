import { call, put, take } from 'redux-saga/effects'
import * as actions from './actions'

import { MOVIES_LIST_URL, API_KEY } from '../../constants'

export const getMoviesList = (name) => {

  let url = MOVIES_LIST_URL + API_KEY + '&s=' + name
    return fetch(url)       
      .then(response => response.json())
      .then(json => { return json })
      .catch(error => { return { errorMessage: "Fail to fetch any data." }})
}


export function* watchFetchMovieList() {
  while (true) {
    const request = yield take(actions.BANANA_MDB_FETCH_MOVIES_LIST)
    yield put(actions.setIsLoading(true))
    const response = yield call(getMoviesList, request.name);

    if (response.errorMessage) {
      yield put(actions.setErrorMessage(response.errorMessage))
    } else if (response.Response === 'False') {
      yield put(actions.setErrorMessage(response.Error))
    } else {
      //Filter movies without poster, year and title
      let movies = response.Search.filter(function(movie) {
        return (movie.Poster && movie.Poster !== 'N/A' && movie.Title && movie.Year)
      })
      if (movies.length) {
        yield put(actions.setMoviesList(movies))
      } else {
        yield put(actions.setErrorMessage('Movie not found.'))
      }
    }
    yield put(actions.setIsLoading(false))
  }
}
