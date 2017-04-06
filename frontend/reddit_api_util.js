export const fetchPosts = (subreddits = []) => {
  let url = 'https://www.reddit.com/.json'

  if (subreddits.length > 0) {
    url = `https://www.reddit.com/r/${subreddits.join('+')}.json`
  }

  return $.ajax({
    method: 'GET',
    url: url
  })
}
