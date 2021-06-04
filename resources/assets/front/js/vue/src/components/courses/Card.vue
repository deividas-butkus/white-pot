<template>
  <b-card class="shadow mb-3">
    <b-row no-gutters>
      <b-col cols="8">
        <h3 class="mb-0">{{ title }}</h3>
        <div>
          <b-badge class="mr-2" v-for="tag in tags" :key="tag">{{
            tag
          }}</b-badge>
        </div>
        <p class="my-3">{{ description }}</p>
      </b-col>
      <b-col cols="2" class="pl-3 border-left">
        <h3 class="h5">Locations:</h3>
        <ul class="list-unstyled">
          <li v-for="loc in getLocationTitles(locations)" :key="loc">
            {{ loc }}
          </li>
        </ul>
      </b-col>
      <b-col cols="2" class="pl-3 border-left">
        <h3 class="h5">Required courses</h3>
        <ul class="list-unstyled">
          <li
            v-for="reqCourse in getCourseTitles(requiredCourses)"
            :key="reqCourse"
          >
            {{ reqCourse }}
          </li>
        </ul>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
export default {
  name: 'Card',
  props: {
    cardData: Object,
  },
  data() {
    return {
      ...this.cardData,
      requiredCourses: this.cardData.requiredCourses ?? [],
    };
  },
  methods: {
    getLocationTitles(locationIds) {
      return this.$store.getters['locations/getLocationTitles'](locationIds);
    },
    getCourseTitles(courseIds) {
      return this.$store.getters['courses/getCourseTitles'](courseIds);
    },
  },
};
</script>
