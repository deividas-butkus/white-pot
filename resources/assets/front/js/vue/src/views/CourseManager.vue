<template>
  <ContainerLayout>
    <h1>Course Manager</h1>
    <Form />
    <Grid />
  </ContainerLayout>
</template>

<script>
import ContainerLayout from '@/layouts/ContainerLayout.vue';
import Grid from '@/components/courseManager/Grid.vue';
import Form from '@/components/courseManager/Form.vue';

export default {
  name: 'CourseManager',
  components: {
    ContainerLayout,
    Grid,
    Form,
  },
  created() {
    this.$store.dispatch('getLocationsAndCourses');
  },
};
</script>
