import fetch from 'node-fetch'

export const FETCH_BLOG_DATA = () => fetch(`${location.origin}/data/blog/blogData.json`)

export const FETCH_BLOG_DETAIL = path => fetch(`${location.origin}${path}`)