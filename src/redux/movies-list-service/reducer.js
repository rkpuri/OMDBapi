import * as actionType from './actions'

const initialState = {
	moviesList: [],
  errorMessage: undefined,
  isLoading: false
}

export default function MoviesListReducer(state = initialState, action) {
  switch (action.type) {
    case actionType.BANANA_MDB_SET_MOVIES_LIST : {
      return { ...state, moviesList: action.list, errorMessage: undefined, isLoading: false }
    }
    case actionType.BANANA_MDB_SET_ERROR_MESSAGE : {
      return { ...state, errorMessage: action.message, moviesList: [], isLoading: false }
    }
    case actionType.BANANA_MDB_SET_IS_LOADING : {
      return { ...state, isLoading: action.isLoading}
    }
    default:
      return state
  }
}