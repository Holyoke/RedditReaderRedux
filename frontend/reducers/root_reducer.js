import { combineReducers } from 'redux'

import SubredditsReducer from './subreddits_reducer'

export default combineReducers({
  subreddits: SubredditsReducer
})
