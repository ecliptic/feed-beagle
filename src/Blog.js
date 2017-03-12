import {BLOG_FEED} from './Constants'
import chalk from 'chalk'
import feedparser from 'feedparser-promised'
import moment from 'moment'

// An in-memory placeholder for the latest feed json
let latest = {
  timestamp: undefined,
  feed: undefined,
}

export async function blog (ctx) {
  const thirtyMinutesAgo = moment().subtract(30, 'minutes')

  if (latest.feed && moment(latest.timestamp).isAfter(thirtyMinutesAgo)) {
    // If the timestamp is less than 30 minutes old, use the cache
    ctx.body = latest.feed
  } else {
    console.log(chalk.blue('  <-- Fetching the blog feed...'))

    // Fetch the feed
    const feed = await feedparser.parse(BLOG_FEED)

    // Update the cache
    latest.timestamp = moment().valueOf()
    latest.feed = feed

    // Return the feed
    ctx.body = feed
  }
}
