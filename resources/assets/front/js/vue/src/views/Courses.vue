<template>
  <ContainerLayout>
    <h1 class="mb-5">Courses</h1>
    <b-row>
      <b-col cols="3">
        <h2 class="h3">Filters</h2>
        <hr />
        <h3 class="h4">Locations</h3>
        <b-form-checkbox
          v-for="loc in locationFilters"
          :key="loc.id"
          v-model="loc.checked"
        >
          {{ loc.title }}
        </b-form-checkbox>
        <hr />
      </b-col>
      <b-col cols="9">
        <h2 class="h3">Courses</h2>
        <Card
          v-for="course in filteredCourses"
          :key="course.id"
          :card-data="course"
        />
      </b-col>
    </b-row>
  </ContainerLayout>
</template>

<script>
import ContainerLayout from '@/layouts/ContainerLayout.vue';
import Card from '@/components/courses/Card.vue';

export default {
  name: 'Courses',
  components: {
    ContainerLayout,
    Card,
  },
  data() {
    return {
      locationFilters: this.$store.getters['locations/getLocations'].map((loc) => ({
        ...loc,
        checked: true,
      })),
    };
  },
  computed: {
    filteredCourses() {
      return this.$store.getters['courses/getCoursesByLocations'](
        this.locationFilters.filter(({ checked }) => checked).map(({ id }) => id),
      );
    },
  },
};
</script>
