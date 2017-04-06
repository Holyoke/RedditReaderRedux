import { RECEIVE_SUBREDDITS } from '../actions/subreddit_actions'

const SubredditsReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_SUBREDDITS:
      return action.subreddits
    default:
      return state
  }
}

export default SubredditsReducer
