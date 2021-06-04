import { dateStr2yyyymmdd } from '@/helpers/dateTime';

export default {
  getCoursesWithLocationTitles: (state, getters) => state.courses.courses.map(({
    created_at, updated_at, locations, ...rest
  }) => ({
    ...rest,
    createdAt: dateStr2yyyymmdd(created_at),
    updatedAt: dateStr2yyyymmdd(updated_at),
    locations: getters['locations/getLocationTitles'](locations).join(', '),
  })),
};
