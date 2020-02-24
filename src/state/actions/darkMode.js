const toggleDarkmode = isDarkMode => ({
  type: "TOGGLE_DARKMODE",
  payload: {
    isDarkMode: !isDarkMode,
  },
})

export { toggleDarkmode }
