const ADD_BLOG= 'ADD_BLOG'
const MODIFY_BLOG = 'MODIFY_BLOG'
const DELETE_BLOG = 'DELETE_BLOG'

const MODIFY_SETTING = 'MODIFY_SETTING'

export function addBlog(blog) {
  return {
    type: ADD_BLOG,
    blog: {
      ...blog,
      id: generateId()
    }
  }
}

export function modifyBlog({ id, key, value }) {
  return {
    type: MODIFY_BLOG,
    id,
    key,
    value
  }
}

export function deleteBlog(id) {
  return {
    type: DELETE_BLOG,
    id
  }
}

export function modifySetting(key, value) {
  return {
    type: MODIFY_SETTING,
    key,
    value
  }
}



export function modifySetting(key, value) {
  return {
    type: MODIFY_SETTING,
    key,
    value
  }
}




/**
 * generate unique ID
 */
function generateId() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    let r = Math.random()*16|0,v=c=='x'?r:r&0x3|0x8
    return v.toString(16)
  }) + (new Date().getTime())
}
