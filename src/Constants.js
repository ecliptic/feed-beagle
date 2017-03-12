import dotenv from 'dotenv'

// Load environment variables from a .env file if it exists
dotenv.config({silent: true})

export const DEV = process.env.NODE_ENV || 'production'

export const BLOG_FEED = 'https://blog.ecliptic.io/feed'
