import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      apiKey: process.env.VUE_APP_API_KEY,
      heroesSearchList: [],
      heroName: '',
      notFound: false,
      otherError: false,
      searchComplete: null,
    };
  },
  mutations,
  actions,
  getters,
};
