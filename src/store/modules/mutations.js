export default {
  findHero(state, payload) {
    state.heroesSearchList = payload;
  },
  heroName(state, payload) {
    state.heroName = payload;
  },
  notFound(state, payload) {
    state.notFound = payload;
  },
  otherError(state, payload) {
    state.otherError = payload;
  },
  searchComplete(state, payload) {
    state.searchComplete = payload;
  },
};
