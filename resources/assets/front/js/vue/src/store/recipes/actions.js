import API from '../../api';

export default {
  async getRecipes({ commit }) {
    try {
      const recipes = await API.getRecipes();
      commit('SAVE_RECIPES', recipes);
    } catch (errMsg) {
      commit('SAVE_ERROR', errMsg);
    }
  },
};
