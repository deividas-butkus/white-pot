export default {
  getCoursesByLocations: (state) => (locationIds) => state.courses
    .filter((course) => course.locations.some((courseLoc) => locationIds.includes(courseLoc))),

  getCourseTitles: (state) => (courseIds) => courseIds
    .map((id) => state.courses.find((l) => l.id === id).title),

  getCourseTitlesAndIds: (state) => state.courses.map(({ id, title }) => ({ id, title })),
};
