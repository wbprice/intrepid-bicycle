import {
  ADD_COURSEWORK_FILES,
  REMOVE_COURSEWORK_FILE
} from './../actions/coursework-actions'

const initialState = []

export default function courseworkReducer (state = initialState, action) {

  const newFiles = []

  switch (action.type) {

  case ADD_COURSEWORK_FILES:

    // Files are returned as a FileList, which is an object that isn't iterable
    for (let i = 0; i < action.fileList.length; i++) {
      newFiles.push(action.fileList.item(i))
    }

    return [
      ...state,
      ...newFiles
    ]

  case REMOVE_COURSEWORK_FILE:
    return state.filter(file => {
      return file.name !== action.name
    })

  default:
    return state

  }

}
