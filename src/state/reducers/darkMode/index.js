const initialState = {
  isDarkMode: false,
}

export default function darkMode(state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE_DARKMODE':
      return {
        ...state, isDarkMode: action.payload.isDarkMode
      }
    default:
      return state
  }
}
