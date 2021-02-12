/* Mutations, actions and getters */
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

export default {
  namespaced: true,
  state: {
    $viewportWidth: 0,
    $viewportHeight: 0,
    $currentScrollPosition: 0,
    $lastScrollPosition: 0
  },
  actions,
  mutations,
  getters
}
