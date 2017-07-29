import { getLocalStore } from '../store/localStore'

const localStore = getLocalStore() || {}

export default function blog(state=localStore, action) {
  return {
    blogs: blogs(state.blogs, action),
    setting: blogs(state.setting, action),
    innerState: blogs(state.innerState, action),
  }
}