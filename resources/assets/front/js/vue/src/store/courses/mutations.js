export default {
  SAVE_COURSES: (state, courses) => {
    state.courses = courses;
  },

  SAVE_ERROR: (state, errMsg) => {
    state.errMsg = errMsg;
  },
};
