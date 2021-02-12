export default {
  $scrollDirection: (state) => {
    return state.$currentScrollPosition >= state.$lastScrollPosition
      ? 'up' : 'down'
  }
}
