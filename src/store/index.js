import { createStore, createLogger } from 'vuex';

const store = createStore({
  state: {
    name: 'Vue'
  },
  modules: {
    // Register modules here
  },
  plugins: [createLogger()]
});

export default store;
