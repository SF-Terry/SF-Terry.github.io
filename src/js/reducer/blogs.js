import { blogModel } from '../store/initialState/index'


const blog = (state = { ...blogModel }, action) => {
  switch (action.type) {
    case 'ADD_TARGET':
      return {
        ...state,
        ...action.blog
      }
    case 'MODIFY_TARGET':
      const { key, value } = action
      if (state) {
        return {
          ...state,
          [action.key]: action.value
        }
      }
    case 'DELETE_TARGET':
      if (state) {
        return {}
      }
  }
}

const blogs = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TARGET':
      return [
        ...state,
        blog(undefined, action)
      ]
    case 'MODIFY_TARGET':
      return state.map(oneTarget => {
        if (oneTarget.id === action.id) {
          return blog(oneTarget, action)
        }
        return oneTarget
      })
    case 'DELETE_TARGET':
      return state.map(oneTarget => {
        if (oneTarget.id === action.id) {
          return blog(oneTarget, action)
        }
        return oneTarget
      })

  }
  return state
}


export default blogs