import API from '../../api';

export default {
  async getCourses({ commit }) {
    try {
      const courses = await API.getCourses();
      commit('SAVE_COURSES', courses);
    } catch (errMsg) {
      commit('SAVE_ERROR', errMsg);
    }
  },

  async deleteCourse({ commit, dispatch }, id) {
    try {
      await API.deleteCourse(id);
      dispatch('getCourses');
    } catch (errMsg) {
      commit('SAVE_ERROR', errMsg);
    }
  },

  async createCourse({ commit, dispatch }, newCourseData) {
    try {
      await API.postCourse(newCourseData);
      dispatch('getCourses');
    } catch (errMsg) {
      commit('SAVE_ERROR', errMsg);
    }
  },

};
