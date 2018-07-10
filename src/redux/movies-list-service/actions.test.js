import * as actions from './actions'

describe('Movies list actions', () => {
  it('should create an action to fetch movies list', () => {
    const name = 'Batman'
    const expectedAction = {
      type: actions.BANANA_MDB_FETCH_MOVIES_LIST,
      name
    }
    expect(actions.fetchMoviesList(name)).toEqual(expectedAction)
  })

  it('should create an action to set movies list array', () => {
    const list = [{Title:'Batman',Year:'2009'},{Title:'The dark',Year:'2009'}]
    const expectedAction = {
      type: actions.BANANA_MDB_SET_MOVIES_LIST,
      list
    }
    expect(actions.setMoviesList(list)).toEqual(expectedAction)
  })

  it('should create an action to set error message', () => {
    const message = "Movie not found"
    const expectedAction = {
      type: actions.BANANA_MDB_SET_ERROR_MESSAGE,
      message
    }
    expect(actions.setErrorMessage(message)).toEqual(expectedAction)
  })

  it('should create an action to set isLoading', () => {
    const isLoading = true
    const expectedAction = {
      type: actions.BANANA_MDB_SET_IS_LOADING,
      isLoading
    }
    expect(actions.setIsLoading(isLoading)).toEqual(expectedAction)
  })
})