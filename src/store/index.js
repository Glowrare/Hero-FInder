import { createStore } from 'vuex';

import heroesModule from './modules/index.js';

const store = createStore({
  modules: {
    heroes: heroesModule,
  },
});

export default store;
