import API from '../../api';

export default {
  async getLocations({ commit }) {
    try {
      const locations = await API.getLocations();
      commit('SAVE_LOCATIONS', locations);
    } catch (errMsg) {
      commit('SAVE_ERROR', errMsg);
    }
  },

  async createLocation({ commit }, title) {
    try {
      await API.postLocation(title);
      const locations = await API.getLocations();
      commit('SAVE_LOCATIONS', locations);
    } catch (errMsg) {
      commit('SAVE_ERROR', errMsg);
    }
  },

  editLocation({ commit, state }, id) {
    const cancelLocationEditing = state.editedLocationId === id;
    if (cancelLocationEditing) {
      commit('SET_EDITED_LOCATION', null);
    } else {
      commit('SET_EDITED_LOCATION', id);
    }
  },

  async updateLocation({ commit, dispatch, state }, formData) {
    try {
      await API.patchLocation({
        ...formData,
        id: state.editedLocationId,
      });
      commit('SET_EDITED_LOCATION', null);
      dispatch('getLocations');
    } catch (errMsg) {
      commit('SAVE_ERROR', errMsg);
    }
  },

  async deleteLocation({ commit, dispatch }, id) {
    try {
      await API.deleteLocation(id);
      dispatch('getLocations');
    } catch (errMsg) {
      commit('SAVE_ERROR', errMsg);
    }
  },
};
