export const BANANA_MDB_FETCH_MOVIES_LIST = 'BANANA_MDB_FETCH_MOVIES_LIST'
export const BANANA_MDB_SET_ERROR_MESSAGE = 'BANANA_MDB_SET_ERROR_MESSAGE'
export const BANANA_MDB_SET_MOVIES_LIST = 'BANANA_MDB_SET_MOVIES_LIST'
export const BANANA_MDB_SET_IS_LOADING = 'BANANA_MDB_SET_IS_LOADING'

export function fetchMoviesList (name) {
  return {
    type: BANANA_MDB_FETCH_MOVIES_LIST,
    name
  }
}

export function setMoviesList (list) {
  return {
    type: BANANA_MDB_SET_MOVIES_LIST,
    list
  }
}

export function setErrorMessage (message) {
  return {
    type: BANANA_MDB_SET_ERROR_MESSAGE,
    message
  }
}

export function setIsLoading (isLoading) {
  return {
    type: BANANA_MDB_SET_IS_LOADING,
    isLoading
  }
}