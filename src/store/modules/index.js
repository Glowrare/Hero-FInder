import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      apiKey: '3688794591166691',
      heroesSearchList: [],
      heroName: '',
      notFound: false,
      otherError: false,
      searchComplete: false,
    };
  },
  mutations,
  actions,
  getters,
};
