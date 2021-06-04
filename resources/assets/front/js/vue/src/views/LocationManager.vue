<template>
  <ContainerLayout>
    <h1>Location Manager</h1>
    <b-row class="my-4">
      <b-col cols="9"><Table /></b-col>
      <b-col cols="3"><Form /></b-col>
    </b-row>
  </ContainerLayout>
</template>

<script>
import ContainerLayout from '@/layouts/ContainerLayout.vue';
import Form from '@/components/locationManager/Form.vue';
import Table from '@/components/locationManager/Table.vue';

export default {
  name: 'LocationManager',
  components: {
    ContainerLayout,
    Form,
    Table,
  },
  created() {
    this.$store.dispatch('locations/getLocations');
  },
};
</script>
