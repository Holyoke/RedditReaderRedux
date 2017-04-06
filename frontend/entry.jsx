import React from 'react'
import ReactDOM from 'react-dom'

import * as redditApiUtil from './reddit_api_util'

document.addEventListener("DOMContentLoaded", function() {
  window.redditApiUtil = redditApiUtil
  ReactDOM.render(<h1>Hello Darkness, my old friend</h1>, document.getElementById('root'));
})
