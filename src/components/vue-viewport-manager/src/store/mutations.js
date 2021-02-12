import * as types from './mutation_types'

export default {
  [types.SET_VIEWPORT_SIZE] (state) {
    if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent) && window.scrollbars.visible && window.innerWidth > document.body.clientWidth) {
      /* Fix on Safari when the scrollbar is a normal one and not a overlay one, still doesn't work on page load but only when a resize is triggered, because on page load Safari doesn't account the sidebar width in the clientWidth */
      state.$viewportWidth = document.body.clientWidth
    } else {
      state.$viewportWidth = window.innerWidth
    }
    document.documentElement.style.setProperty('--vw', `${state.$viewportWidth / 100}px`)
    state.$viewportHeight = window.innerHeight
    document.documentElement.style.setProperty('--vh', `${state.$viewportHeight / 100}px`)
  },
  [types.SET_SCROLL_POSITION] (state) {
    let newScroll = document.body.getBoundingClientRect().top
    state.$lastScrollPosition = state.$currentScrollPosition
    state.$currentScrollPosition = newScroll
  }
}
