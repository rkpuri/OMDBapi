import reducer from './reducer'
import * as actions from './actions'

describe('Movies list reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        moviesList: [],
        errorMessage: undefined,
        isLoading: false
      }
    )
  })

  it('should handle BANANA_MDB_SET_MOVIES_LIST', () => {
    const list = [{Title:'Batman',Year:'2009'},{Title:'The dark',Year:'2009'}]
    expect(
      reducer({}, {
        type: actions.BANANA_MDB_SET_MOVIES_LIST,
        list: list
      })
    ).toEqual(
      {
        moviesList: list,
        errorMessage: undefined,
        isLoading: false
      }
    )
  })

  it('should handle BANANA_MDB_SET_ERROR_MESSAGE', () => {
    const message = "Movie not found"
    expect(
      reducer({}, {
        type: actions.BANANA_MDB_SET_ERROR_MESSAGE,
        message: message
      })
    ).toEqual(
      {
        moviesList: [],
        errorMessage: message,
        isLoading: false
      }
    )
  })

  it('should handle BANANA_MDB_SET_IS_LOADING', () => {
    const isLoading = true
    expect(
      reducer({}, {
        type: actions.BANANA_MDB_SET_IS_LOADING,
        isLoading: isLoading
      })
    ).toEqual(
      {
        isLoading: true
      }
    )
  })

})