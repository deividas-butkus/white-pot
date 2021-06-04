<template>
  <div>
    <h2 class="mb-3">All Courses</h2>
    <div class="grid-row header">
      <span>Title</span>
      <span>Description</span>
      <span>Locations</span>
      <span>Required Courses</span>
      <span>Created At</span>
      <span>Updated At</span>
      <span>Actions</span>
    </div>
    <div
      v-for="{
        id,
        title,
        description,
        locations,
        requiredCourses,
        createdAt,
        updatedAt,
      } in courses"
      :key="id"
      class="grid-row"
    >
      <span>{{ title }}</span>
      <span>{{ description }}</span>
      <span>{{ locations }}</span>
      <span>{{ requiredCourses }}</span>
      <span>{{ createdAt }}</span>
      <span>{{ updatedAt }}</span>
      <span>
        <b-button variant="warning">Edit</b-button>
        <b-button variant="danger" @click="deleteCourse(id)">Delete</b-button>
      </span>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Grid',
  methods: {
    ...mapActions('courses', ['deleteCourse']),
  },
  computed: {
    ...mapGetters({
      courses: 'getCoursesWithLocationTitles',
    }),
  },
};
</script>

<style lang="scss" scoped>
.grid-row {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-auto-rows: auto;
  padding: 0.5rem;
  &:nth-of-type(2n):not(.header) {
    background-color: #00000009;
  }
}
.grid-row.header {
  font-weight: bold;
  border-bottom: 2px solid black;
}
</style>
