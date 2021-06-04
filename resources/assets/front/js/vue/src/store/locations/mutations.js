export default {

  ADD_LOCATION(state, item) {
    state.locations.push(item);
  },

  SET_EDITED_LOCATION(state, id) {
    state.editedLocationId = id;
  },

  SAVE_LOCATIONS(state, locations) {
    state.locations = locations;
  },

  SAVE_ERROR(state, errMsg) {
    state.errMsg = errMsg;
  },
};
