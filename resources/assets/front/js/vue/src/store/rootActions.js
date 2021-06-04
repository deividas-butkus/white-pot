import API from '../api';

export default {
  async getLocationsAndCourses({ commit }) {
    try {
      const [locations, courses] = await Promise.all([
        API.getLocations(),
        API.getCourses(),
      ]);
      commit('locations/SAVE_LOCATIONS', locations);
      commit('courses/SAVE_COURSES', courses);
    } catch (errMsg) {
      commit('courses/SAVE_ERROR', errMsg);
    }
  },
};
