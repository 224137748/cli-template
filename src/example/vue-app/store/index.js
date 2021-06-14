import { createStore } from 'vuex';

const store = {
  state: {
    count: 10
  },
  mutations: {
    UPDATE_COUNT(state) {
      state.count += 1;
    }
  }
};

export default createStore(store);
