import React from 'react'
import ReactDOM from 'react-dom'

// testing
import * as subredditActions from './actions/subreddit_actions'
import * as redditApiUtil from './util/reddit_api_util'
import configureStore from './store/store'

document.addEventListener("DOMContentLoaded", function() {
  const store = configureStore()

  // testing
  window.redditApiUtil = redditApiUtil
  window.store = store
  window.subredditActions = subredditActions
  // testing

  ReactDOM.render(<h1>Hello Darkness, my old friend</h1>, document.getElementById('root'));
})
